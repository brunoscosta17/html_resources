const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
    let header = item.querySelector('header');
    console.log(header);
    header.addEventListener('click', () => {
        item.classList.toggle('open');
        let description = item.querySelector('.description');
        console.log(description);
        if (item.classList.contains('open')) {
            description.style.height = `${description.scrollHeight}px`;
            item.style.paddingBottom = '1rem';
            item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        } else {
            description.style.height = '0px'
            item.style.paddingBottom = '0px';
            item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
        removeOpen(index);
    });
});

function removeOpen(index1) {
    console.log(index1);
    accordionContent.forEach((item2, index2) => {
        if (index1 !== index2) {
            item2.classList.remove('open');
            let description = item2.querySelector('.description');
            description.style.height = '0px';
            item2.style.paddingBottom = '0px';
            item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
    });
}