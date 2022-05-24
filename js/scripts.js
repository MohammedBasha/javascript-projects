class PhotoGallery {
    constructor() {
        this.API_KEY = ''; // The Key
        this.logo = document.querySelector('.logo');
        this.galleryDiv = document.querySelector('.gallery'); // the gallery div wrapper
        this.searchForm = document.querySelector('.header form'); // the search form
        this.loadMore = document.querySelector('.load-more'); // the load more button
        this.pageIndex = 1;
        this.eventHandler();
    }

    // Building a method for fetching items (images or videos)
    // you must use async the method when using await inside
    async fetchingItems(url) { // passing the url argument
        const response = await fetch(url, { // waiting the data to be fetched
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.API_KEY
            }
        });

        return response.json(); // Convert the data to json object
    }

    // Generate the Items HTML
    generateHTML(items) { // Pass the items to the generator HTML method
        items.forEach(item => { // Loop through each item
            const itemDiv = document.createElement('div'); // Creating the .item div
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <a href="${item.src.large}" target="_blank">
                    <img src="${item.src.medium}" alt="${item.photographer}'s photo">
                </a>
                <h3>${item.photographer}</h3>
            `;
            this.galleryDiv.append(itemDiv); // append each generated .item to the main .gallery
        });
    }

    // you must use async the method when using await inside
    async getImgs(index) {
        this.loadMore.setAttribute('data-img', 'curated');
        const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`; // default base url

        const result = await this.fetchingItems(baseURL); // waiting the data to be fetched

        this.generateHTML(result.photos); // Generate the photos item
    }

    // Searching the items
    async getSearchItems(e) {
        this.loadMore.setAttribute('data-img', 'search');
        e.preventDefault();
        this.galleryDiv.innerHTML = ''; // empty the .gallery each time
        const searchValue = e.target.querySelector('input').value; // getting the searched keyword
        const baseURL = searchValue ? // if the input value is empty, use the default base url
            `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12` :
            'https://api.pexels.com/v1/curated?page=1&per_page=12';
        const data = await this.fetchingItems(baseURL);
        this.generateHTML(data.photos);
    }

    async getMoreSearchItems(index) {
        const searchValue = this.searchForm.querySelector('input').value; // getting the searched keyword
        const baseURL = searchValue ? // if the input value is empty, use the default base url
            `https://api.pexels.com/v1/search?query=${searchValue}&page=${index}&per_page=12` :
            `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
        const data = await this.fetchingItems(baseURL);
        this.generateHTML(data.photos);
    }

    // The load more button method
    loadMoreItems(e) {
        let index = ++this.pageIndex;
        const loadMoreData = e.target.getAttribute('data-img');
        loadMoreData === 'curated' ? this.getImgs(index) : this.getMoreSearchItems(index);
    }

    eventHandler() {
        // After the DOM is loaded run the fetching photos method
        document.addEventListener('DOMContentLoaded', () => {
            this.getImgs(1);
        });

        // Adding the Search form functionality
        this.searchForm.addEventListener('submit', (e) => {
            this.pageIndex = 1;
            this.getSearchItems(e);
        });

        // Adding the load more button functionality
        this.loadMore.addEventListener('click', (e) => {
            this.loadMoreItems(e);
        });

        // When clicking the logo, it should reset to the page 1
        this.logo.addEventListener('click', () => {
            this.pageIndex = 1;
            this.galleryDiv.innerHTML = '';
            this.getImgs(this.pageIndex);
        });
    }
}

const gallery = new PhotoGallery();