


var features = '';
var searchDatabase = new SearchDatabase();
var searchResults_length = 0;
var searchResults = new Object();
function searchPage(features)
{
   var element = document.getElementById('DiceSearch_keyword');
   if (element.value.length != 0 || element.value != " ")
   {
      var value = unescape(element.value);
      var keywords = value.split(" ");
      searchResults_length = 0;
      for (var i=0; i<database_length; i++)
      {
         var matches = 0;
         var words = searchDatabase[i].title + " " + searchDatabase[i].description + " " + searchDatabase[i].keywords;
         for (var j = 0; j < keywords.length; j++)
         {
            var pattern = new RegExp(keywords[j], "i");
            var result = words.search(pattern);
            if (result >= 0)
            {
               matches++;
            }
            else
            {
               matches = 0;
            }
         }
         if (matches == keywords.length)
         {
            searchResults[searchResults_length++] = searchDatabase[i];
         }
      }
      var html = '';
      var results = '';
      html = html + '<span style="font-size:24px;color:#000000">';
      for (var n=0; n<searchResults_length; n++)
      {
         results = results + '<strong><a style="color:#40E0D0" href="'+searchResults[n].url+'">'+searchResults[n].title +'<\/a><\/strong><br>Description: ' + searchResults[n].description + '<br><br>';
      }
      if (searchResults_length == 0)
      {
         results = 'No results';
      }
      else
      {
         html = html + searchResults_length;
         html = html + ' result(s) found for search term: ';
         html = html + value;
         html = html + '<br><br>';
      }
      html = html + results;
      html = html + '<\/span>';
      $('#TheSearchArea').css('padding' , '2px');
      $('#TheSearchArea').html(html);
   }
   return false;
}
function searchParseURL()
{
   var url = decodeURIComponent(window.location.href);
   if (url.indexOf('?') > 0)
   {
      var terms = '';
      var params = url.split('?');
      var values = params[1].split('&');
      for (var i=0;i<values.length;i++)
      {
         var param = values[i].split('=');
         if (param[0] == 'q')
         {
            terms = unescape(param[1]);
            break;
         }
      }
      if (terms != '')
      {
         var element = document.getElementById('DiceSearch_keyword');
		 
         element.value = terms;
		 
         searchPage('');
      }
   }
}



$(document).ready(function()
{
   searchParseURL();
   var $search = $('#DiceSearch_form');
   var $searchInput = $search.find('input');
   var $searchLabel = $search.find('label');
   if ($searchInput.val())
   {
      $searchLabel.hide();
   }
   $searchInput.focus(function()
   {
      $searchLabel.hide();
   }).blur(function()
   {
      if (this.value == '')
      {
         $searchLabel.show();
      }
   });
   $searchLabel.click(function()
   {
      $searchInput.trigger('focus');
   });
   var $autocomplete = $('<ul class="autocomplete"></ul>').hide().insertAfter('#DiceSearch_keyword');
   var selectedItem = null;
   var setSelectedItem = function(item)
   {
      selectedItem = item;
      if (selectedItem === null)
      {
         $autocomplete.hide();
         return;
      }
      if (selectedItem < 0)
      {
         selectedItem = 0;
      }
      if (selectedItem >= $autocomplete.find('li').length)
      {
         selectedItem = $autocomplete.find('li').length - 1;
      }
      $autocomplete.find('li').removeClass('selected').eq(selectedItem).addClass('selected');
      $autocomplete.show();
   };
   var populateSearchField = function()
   {
      $('#DiceSearch_keyword').val($autocomplete.find('li').eq(selectedItem).text());
      setSelectedItem(null);
   };
   $('#DiceSearch_keyword').attr('autocomplete', 'off').keyup(function(event)
   {
      if (event.keyCode > 40 || event.keyCode == 8)
      {
         var data = new Array();
         var keywordVal = $('#DiceSearch_keyword').val();
         keywordVal = keywordVal.toLowerCase();
         for (i=0; i<database_length; i++)
         {
            var words = (searchDatabase[i].title + " " + searchDatabase[i].description + " " + searchDatabase[i].keywords).toLowerCase();
            var array = words.split(" ");
            data = $.merge(data, array);
         }

         var unique = new Array();
         o:for(var i = 0; i < data.length; i++)
         {
            for(var j = 0; j < unique.length; j++)
            {
               if(unique[j]==data[i]) continue o;
            }
            unique[unique.length] = data[i];
         }

         unique.sort();
         if (keywordVal.length && unique.length)
         {
            $autocomplete.empty();
            $.each(unique, function(index, term)
            {
               term = term.toLowerCase();
               if (term.indexOf(keywordVal) == 0)
               {
                  $('<li></li>').text(term).appendTo($autocomplete).mouseover(function()
                  {
                     setSelectedItem(index);
                  }).click(populateSearchField);
               }
            });
            setSelectedItem(0);
         }
         else
         {
            setSelectedItem(null);
         }
      }
      else
      if (event.keyCode == 38 && selectedItem !== null)
      {
         setSelectedItem(selectedItem - 1);
         event.preventDefault();
      }
      else
      if (event.keyCode == 40 && selectedItem !== null)
      {
         setSelectedItem(selectedItem + 1);
         event.preventDefault();
      }
      else
      if (event.keyCode == 27 && selectedItem !== null)
      {
         setSelectedItem(null);
      }
   }).keypress(function(event)
   {
      if (event.keyCode == 13 && selectedItem !== null)
      {
         populateSearchField();
         event.preventDefault();
      }
   }).blur(function(event)
   {
      setTimeout(function()
      {
         setSelectedItem(null);
      }, 250);
   });
});

