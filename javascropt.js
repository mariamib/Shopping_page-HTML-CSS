const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closee = document.getElementById('close');
if(bar)
{
    bar.addEventListener('click',()=>
    {
        nav.style.display='flex';
    })
}
if(closee)
{
    closee.addEventListener('click',()=>
    {
        nav.style.display='none';
    })
}