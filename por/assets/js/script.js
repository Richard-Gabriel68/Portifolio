let menu = 
{
    showing: false,
    abrir: function()
    {
        if (this.showing == false)
        {
            this.showing = true;
            document.querySelector("aside").style.right="0";
            document.querySelector('.shadow').style.display='block';
        }
        else
        {
            this.showing = false;
            document.querySelector("aside").style.right="-40vw";
            document.querySelector('.shadow').style.display='none';
        }
    },
    direcionar: function()
    {
        document.querySelector("aside").style.right="-40vw";
        this.showing = false;
        document.querySelector('.shadow').style.display='none';
    }
};

function seta()
{
    document.querySelector(".ArrowArea").style.display="none";
};


window.addEventListener("scroll", seta);

