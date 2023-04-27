console.log("before loadadadadad")
window.onload = function () {
    console.log("on loadadadadadadads")
    const container = document.querySelector('.swiper-container');
    if(!container) return;
    container.style.overflow = 'hidden';
    container.style.position = 'relative';
    const containerBound = container.getBoundingClientRect();
    const items = container.children;
    if(!items) return;
    const itemBound = items[0].getBoundingClientRect();
    items[0].style.transition = 'margin-top 500ms';
    container.style.height = itemBound.height + 'px';
    let selectedIx = 0
    
    const swiper = document.createElement('div');
    swiper.style.borderRadius = '50px';
    for(let i = 0; i < items.length; i++) {
        const swiperItem = document.createElement('div');
        swiperItem.style.width = '21px';
        swiperItem.style.height = '21px';
        swiperItem.style.borderRadius = '50%';
        swiperItem.style.backgroundColor = i === 0 ? 'white' : 'transparent';
        swiperItem.style.border = '1px solid white'
        swiperItem.style.margin = '5px'; '0px';
        swiperItem.style.cursor = 'pointer';
        swiper.appendChild(swiperItem);
        
        swiperItem.addEventListener('click', function () {
            items[0].style.marginTop = `-${i * items[0].getBoundingClientRect().height}px`;
            selectedIx = i
            for(let j = 0; j < swiper.children.length; j++) {
                swiper.children[j].style.backgroundColor = 'transparent';
            }
            swiperItem.style.backgroundColor = 'white';
        })
    }
    container.appendChild(swiper);

    const observer = new ResizeObserver(()=>{
        const newItemBound = items[0].getBoundingClientRect()
        swiper.style.left = container.getBoundingClientRect().width - swiper.getBoundingClientRect().width + 'px';
        const margin = (newItemBound.height / 2) - (swiper.getBoundingClientRect().height / 2)
        swiper.style.margin = `${margin}px 0 0 -5px`;
        container.style.height = newItemBound.height + 'px';
        items[0].style.marginTop = `-${selectedIx * items[0].getBoundingClientRect().height}px`
    })

    observer.observe(items[0])

    swiper.style.position = 'absolute';
    swiper.style.top = '0';
    swiper.style.left = containerBound.width - swiper.getBoundingClientRect().width + 'px';
    swiper.style.display = 'flex';
    swiper.style.flexDirection = 'column';
    const margin = (itemBound.height / 2) - (swiper.getBoundingClientRect().height / 2)
    swiper.style.margin = `${margin}px 0 0 -5px`;
    swiper.style.justifyContent = 'space-evenly';
}
