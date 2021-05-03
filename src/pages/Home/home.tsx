import React from "react";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import "../../index.css";
import "./home.css";
import paragraphs from "./paragraphs";
import familyPicture from "../../resources/images/family_picture.jpg";
import mpFarmsLogo from "../../resources/icons/mp-farms.png";

class Home extends React.Component{

    render(){return(
        <FirebaseAuthConsumer>
            {({isSignedIn, user, providerId}) => {
                
                let name = isSignedIn ? user.displayName : "Visitor";
                return (<>
                       
                    <div className="headerImageWrapper">
                        <div className="left"></div>
                        <div className="center">
                            <img src={familyPicture} alt="family" className="mainPicture"/> 
                        </div>
                        <div className="right"></div>
                    </div> 
                    <img src={mpFarmsLogo} className="logo headerLogoWrapper"/>
                    {/* <div className="headerTextWrapper">
                        <div className="left"></div>
                        <div className="center">
                        </div>
                        <div className="right"></div>
                    </div> */}
                    
                    <div className="pageBody">

                        {/* we want this div to be absolutely positioned */}
                        <div>
                            <h1>Hi, <b>{name}</b></h1><br/>
                            <b>MP Farms</b> is currently under construction. Features to expect are <b/>
                            <ul>
                                <li>Shopping for honey and fresh produce.</li>
                                <li>Blogs</li>
                            </ul>
                        </div>

                       
                        {paragraphs.map((p, index) => {
                            let paragraph = <p>{p.text}</p>;
                            let image = <div className="imageWrapper"><img src={p.picture} alt="paragraph visual" className="paragraphPicture"/></div>;
                            let odd = index % 2 !== 0;
                            if(odd){
                                return (
                                    <div className="paragraph">
                                        {paragraph}
                                        {image}
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="paragraph">
                                        {image}
                                        {paragraph}
                                    </div>
                                )
                            }
                        })}
                        
                    </div>
                </>)
            }}
        </FirebaseAuthConsumer>
    )}

}
export default Home;