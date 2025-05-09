document.addEventListener("DOMContentLoaded", function () {
    // document.querySelectorAll(".main-menu li.menu-item a").forEach(link => {
    //     const text = link.textContent;
    //     link.innerHTML = `<span>${text}</span> <svg class="button-stroke" viewBox="0 0 154 13"><path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg> `;
    // });
    document.querySelectorAll(".main-menu li.menu-item a").forEach(link => {
        const text = link.textContent;
        const parentLi = link.closest('li');
        
        // Store original href before any modifications
        const originalHref = link.getAttribute('href');
        console.log(originalHref);

    
        // Add SVG to all links first
        link.innerHTML = `
            <span>${text}</span>
            <svg class="button-stroke" viewBox="0 0 154 13">
                <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" 
                      fill="none" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      vector-effect="non-scaling-stroke"/>
            </svg>
        `;
    
        // Only process links that originally had href="#"
        if (originalHref === 'javascript:void(0)') {
            console.log(originalHref);
            // Modify href and add class
            link.href = 'javascript:void(0)';
            parentLi.classList.add('no-link');
            
            // Create and append tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = 'coming soon';
            link.appendChild(tooltip);
        }
    });


        const blogItems = document.querySelectorAll('.blog-count-list');
        const totalItems = blogItems.length;
        const buttonContainer = document.querySelector('.tz-parent-more');
        const loadButton = document.querySelector('.tz-more-button');
        const loadButtonText = document.querySelector('.span-tz');
        let visibleItems = 6;

        // Initially hide button if there are 6 or fewer items
        if (totalItems <= 6) {
            buttonContainer.style.display = 'none';
        } else {
            // Hide items beyond initial 6
            for (let i = visibleItems; i < totalItems; i++) {
                blogItems[i].style.display = 'none';
            }
        }

        loadButton.addEventListener('click', function(e) {
            e.preventDefault();

            if (loadButton.textContent === 'Load More') {
                visibleItems += 4;
                if (visibleItems >= totalItems) {
                    visibleItems = totalItems;
                    loadButton.textContent = 'Load Less';
                    loadButtonText.textContent = 'Load Less';
                }
            } else {
                visibleItems -= 4;
                if (visibleItems <= 6) {
                    visibleItems = 6;
                    loadButton.textContent = 'Load More';
                    loadButtonText.textContent = 'Load More';
                }
            }

            // Update item visibility
            for (let i = 0; i < totalItems; i++) {
                blogItems[i].style.display = i < visibleItems ? 'block' : 'none';
            }
        });

});
$(document).ready(function(){
    $('.share-buttons > li > a').on('click', function () {
        var link = $(this).data('url');
        var title = $(this).data('title');

        if ($(this).data('network') === 'facebook') {
            //var facebook = "https://www.facebook.com/sharer/sharer.php?u=" + link;
            var facebook = "http://www.facebook.com/sharer.php?u=" + link + "&p[title]=" + title
            /*                window.FB.ui({
             method: 'share', href: link,
             });*/
            window.open(
                    facebook,
                    'targetWindow',
                    'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350'
                    );
        }
        //https://www.linkedin.com/shareArticle?mini=true&url=http%3A//techuz.info/techuz-laravel/public/blog/benefits-of-deploying-react-app-on-amazon-s3-and-cloud-front/&title=blog&summary=&source=
        if ($(this).data('network') === 'pinterest') {
            var pinterest = "http://pinterest.com/pin/create/button/?url=" + link + "&description=" + title;
            window.open(
                    pinterest,
                    'targetWindow',
                    'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350'
                    );
        }
        if ($(this).data('network') === 'linkedin') {
            var linkedin = "https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title;
            window.open(
                    linkedin,
                    'targetWindow',
                    'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350'
                    );
        }
        if ($(this).data('network') === 'twitter') {
            var twitter = "http://twitter.com/intent/tweet?text=" + title + "&url=" + link;
            window.open(
                    twitter,
                    'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350'
                    );
        }
        if ($(this).data('network') === 'gplus') {
            var gplus = "https://plus.google.com/share?url=" + link;
            window.open(
                    gplus,
                    'targetWindow',
                    'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350'
                    );
        }
        return false;
    });
})

// Reset specific dropdowns
document.addEventListener( 'wpcf7mailsent', function( event ) {
    $('#mySelect').val('').trigger('change');
}, false );
