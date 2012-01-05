/**
 * Highlights verses on mouseover and attempts to find similar verses in other panes
 *
 * @author John Dyer (http://j.hn/)
 */
 
docs.plugins.push({

	init: function( content ) { 
	
		var verseClass = 'verse-highlight',
			highlightTimer = null,
			clearTimer = function() {
				if (highlightTimer !== null) {
					clearTimeout(highlightTimer);
					highlightTimer = null;
				}				
			},
			startTimer = function() {
				clearTimer();
				highlightTimer = setTimeout(function() {
					removeHighlights();
				}, 500);
			},
			removeHighlights = function() {
				$('.' + verseClass).removeClass(verseClass);
			}
		
		content.on('mouseover', 'span.verse', function() {
			
			removeHighlights();
			clearTimer();
			
			var verse = $(this),
				verseId = verse.attr('data-osis');
				
			$('.' + verseClass).removeClass( verseClass );
			
			$('span.verse[data-osis="' + verseId + '"]').addClass(verseClass);
			
		}).on('mouseout', 'span.verse', function() {
			
			startTimer();
			
		});
	}
});
