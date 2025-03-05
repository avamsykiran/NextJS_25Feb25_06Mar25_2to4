
const Greet2ServerPage = async ( {params}:{params:Promise<{userNames:string[]}>} ) => {
    
    let { userNames } = await params;

    return (
        <section className="box">
            <h3>Greet Page</h3>             
            {
                userNames && userNames.length>0 && userNames.map( (unm:string) => (
                    <p> Hello <strong>{unm}</strong>! We welcome you all here.  </p>
                ) )
            }
        </section>
    );
}

export default Greet2ServerPage;