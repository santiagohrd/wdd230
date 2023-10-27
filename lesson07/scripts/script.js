const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const chapters = ['1 Nephi', '2 Nephi', 'Jacob', 'Enos', 'Jarom', 'Omni', 'Words of Mormon', 'Mosiah', 'Alma', 'Helaman', '3 Nephi', '4 Nephi', 'Mormon', 'Ether', 'Moroni']

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value != '')
        {
            displayList(input.value);
            chaptersArray.push(input.value);

            setChapterList();
            input.value = '';

            input.focus();
        }
    else{
        input.focus();
        input.value = '';
    }
});

function displayList(item){
    const li = document.createElement('li');
    const deletebutton = document.createElement('button');
    
    li.textContent = item;
    deletebutton.textContent = '❌';
    
    li.append(deletebutton);
    list.append(li);
    
    deletebutton.addEventListener('click', function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};


function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};


function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
 };

 function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
 };