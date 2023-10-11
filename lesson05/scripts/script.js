const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const chapters = ['1 Nephi', '2 Nephi', 'Jacob', 'Enos', 'Jarom', 'Omni', 'Words of Mormon', 'Mosiah', 'Alma', 'Helaman', '3 Nephi', '4 Nephi', 'Mormon', 'Ether', 'Moroni']


button.addEventListener('click', function() {
    if (input.value != '')
        {
            input.focus();

            const li = document.createElement('li');
            const deletebutton = document.createElement('button');
            
            li.textContent = input.value;
            deletebutton.textContent = '❌';
            
            li.append(deletebutton);
            list.append(li);
            
            deletebutton.addEventListener('click', function(){
                list.removeChild(li);
                input.focus();
            });
            
            input.focus();
            input.value = '';
        }
    else{
        input.focus();
        input.value = '';
    }
});
