let menu = 
{
    showing: false,
    abrir: function()
    {
        if (this.showing == false)
        {
            this.showing = true;
            document.querySelector("aside").style.right="0";
        }
        else
        {
            this.showing = false;
            document.querySelector("aside").style.right="-40vw";
        }
    },
    direcionar: function()
    {
        document.querySelector("aside").style.right="-40vw";
        this.showing = false;
    }
};

function seta()
{
    document.querySelector(".ArrowArea").style.display="none";
}

window.addEventListener("scroll", seta);
