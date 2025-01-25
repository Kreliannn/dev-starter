
let cdn = [
    {
        img : "https://rohit-chouhan.gallerycdn.vsassets.io/extensions/rohit-chouhan/sweetalert2-snippet/1.1.2/1625627316335/Microsoft.VisualStudio.Services.Icons.Default",
        name : "sweet alert 2",
        description : `
            SweetAlert2 is a JavaScript library used for creating stylish, customizable, and responsive alert dialogs. It replaces the default browser alerts, confirmations, and prompts with beautiful, animated modal popups. The library is lightweight, easy to integrate, and provides a much better user experience.
        `,
        documentation : "https://sweetalert2.github.io/",
        cdn : `
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        `
    },
]

export default function CdnGenerator()
{


    return(
        <div>
            <br />
            <div className="m-auto border w-5/6 h-96 bg-gray-200 drop-shadow-lg">
                <div className="m-auto border h-16 bg-black drop-shadow-lg">

                </div>
                <div className="h-80 overflow-auto bg-blue-100 grid grid-cols-1">
                    {
                        cdn.map((cdn) => {
                            return(
                                <div key={cdn.name} className="h-28  flex justify-center border container ">

                                    <div className=" border border-black h-100  container" style={{ width : "20%"}}>
                                        <img src={cdn.img} alt="" />
                                    </div>

                                    <div className=" border border-black h-100 container" style={{ width : "50%"}}>
                                        <h1> {cdn.name} </h1>
                                    </div>

                                    <div className=" border border-black h-100 container " style={{ width : "80%"}}>
                                        <p>{cdn.description}</p>
                                    </div>

                                    <div className="border border-black h-100  container" style={{ width : "20%"}}>

                                    </div>
                                
                                </div>                           
                            )
                        })
                    }


                 

                   

                </div>
            </div>
            
        </div>
    )
}