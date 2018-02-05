
// vim: tabstop=2
// vim: shiftwidth=2

(function() {
  'use strict';
  
  $(document.head || document.documentElement).append($('<link rel="stylesheet" type="text/css" href="'+chrome.extension.getURL('autobbcheck.css')+'"/>'));

  $(document).ready(function() {
    console.log('Yeah');
    
    var goButton = $('<button>Yay</button>');
    $('#co_headerSearch').append(goButton);
    $(goButton).click(function() {
      var url = "https://1.next.westlaw.com/Search/Results.html?query=%22tax%20rate%22&jurisdiction=ALLCASES&contentType=BATCH_ALL&transitionType=Search&contextData=(sc.Default)";

      // https://stackoverflow.com/questions/8389646/send-post-data-on-redirect-with-javascript-jquery
      var form = $('<form action="" method="post"></form>');
      $('body').append(form);
      $(form).attr('action', url);
      var addInput = function(k, v) {
        var input = $('<input>');
        $(input).attr('name', k);
        $(input).attr('value', v);
        $(form).append(input);
      }
      addInput('searchPostBody', '{"query":"\\"tax rate\\"","jurisdictions":["ALLCASES"],"spellChecked":false,"forceTnc":"pref_phr","defaultSortTypes":{"DOCKET":"CASE_TITLE","DOCKET-PRE":"CASE_TITLE","NEWS":"DATE_DESCENDING"},"childRequests":[{"categoryPageUrl":"/Browse/Home/SecondarySources/LawReviewsJournals/NationalLawReviewsJournals/UniversityofPennsylvaniaLawReview?transitionType=Default&contextData=(sc.Default)&originationContext=Favorites"}]}');
      addInput('searchUri', '/Search/v1/batch/start');
      form.submit();
    });
  });
})();

