//----------- Onclick form dropdown list function ----------//
$(document).ready(function()
{
    //----------- [start] job type dropdown function ----------//
    $('.dl-parent-type').on("click",function()
    {
        $(this).find(".dl-content-type").toggle();
        $(this).siblings().find(".dl-content-type").hide();

        if($(".dl-content-type:visible").length === 0 )
        {
            $("#dl-overlay-type").hide();
        }
        else
        {
            $("#dl-overlay-type").show();
        }
    });

    $("#dl-overlay-type").on("click",function()
    {
        $(".dl-content-type").hide();
        $(this).hide();
    });
    //----------- [end] job type dropdown function ----------//

    
    
    //----------- [start] category dropdown function ----------//
    $('.dl-parent-category').on("click",function()
    {
        $(this).find(".dl-content-category").toggle();
        $(this).siblings().find(".dl-content-category").hide();

        if($(".dl-content-category:visible").length === 0 )
        {
            $("#dl-overlay-category").hide();
        }
        else
        {
            $("#dl-overlay-category").show();
        }
    });
    //----------- [end] category dropdown function ----------//

    
    
    //----------- [start] location dropdown function ----------//
    $("#dl-overlay-category").on("click",function()
    {
        $(".dl-content-category").hide();
        $(this).hide();
    });

    $('.dl-parent-location').on("click",function()
    {
        $(this).find(".dl-content-location").toggle();
        $(this).siblings().find(".dl-content-location").hide();

        if($(".dl-content-location:visible").length === 0 )
        {
            $("#dl-overlay-location").hide();
        }
        else
        {
            $("#dl-overlay-location").show();
        }
    });

    $("#dl-overlay-location").on("click",function()
    {
        $(".dl-content-location").hide();
        $(this).hide();
    });
    //----------- [end] location dropdown function ----------//
});
//----------- [end] entire dropdown list function ----------//