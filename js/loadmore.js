
    const loadmore = document.querySelector('#loadmore');
    let currentItems = 6;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.box-container .box')];
        for (let i = currentItems; i < currentItems + 6; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 6;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
 