import React from "react";
import Logo from "../Logo/Logo";
import List from "../List/List";
import Button from "../Button/Button";

const Header = () =>{

    
  let lists = ["Home","About","service","Pages","Blog","Contact Us","Gallery","Portfolio"];

    return(

        <>

            <header className="bg-light shadow p-3 bg-body rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Logo/>
                        </div>
                        <div className="col-6 pt-4">
                            <List menu={lists}/>
                        </div>
                        <div className="col-3 text-end pt-3 ">
                            <Button/>
                        </div>
                    </div>
                </div>
            </header>

        </>

    )

}
export default Header;