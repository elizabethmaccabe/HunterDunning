// [START] Hamburger Menu Overlay Click Functions //
function openNav()
{
    document.getElementById("main-nav").style.height = "100%";
}

function closeNav()
{
    document.getElementById("main-nav").style.height = "0%";
}
// [END] //


// [START] Homepage Nav Dropdown Functionality //
$(function()
{
    $('li.dropdown > a').on('click',function(event)
    {
        event.preventDefault()
        $(this).parent().find('ul').first().toggle(300);
        $(this).parent().siblings().find('ul').hide(200);

        //Hide menu when clicked outside
        $(this).parent().find('ul').mouseleave(function()
        {  
            var thisUI = $(this);
            $('html').click(function()
            {
                thisUI.hide();
                $('html').unbind('click');
            });
        });
    });
});
// [END] //