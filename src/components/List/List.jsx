const List = ({menu})=>{

    console.log("Props" , menu);
    
    return(

        <ul className="d-flex justify-content-between list-unstyled">
            {
                menu.map((m)=>{
                    return(
                        <li>
                            {
                                m
                            }
                        </li>
                    )
                })
            }
        </ul>        

    )

}
export default List; 