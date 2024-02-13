import React from "react";
import { Table, Col, Row, Container} from "react-bootstrap";
import LoginInfoCard from "../../assets/img/Info Card.png";
import ArtistAvatar from "../../assets/img/Artist Avatar.png";
import ArtistAvatar1 from "../../assets/img/Artist Avatar1.png";
import ArtistAvatar2 from "../../assets/img/Artist Avatar2.png";
import LoginBetweenImg from '../../assets/img/loginbar_between.svg';
// import LoginBetweenImg from '../../assets/img/loginbar_between.svg';

import RankingNumberImg from '../../assets/img/Ranking Number.svg';
const Logined = () => 
{
    return (
        <div>
            <div className="login_container">
                <div className="artist_card">
                    <tbody>
                        <tr>
                            <td>
                                <img src={LoginInfoCard} className="login_info_card"/>
                            </td>
                            <td>
                                <tr className="back_content">
                                    <td>
                                        <img src={ArtistAvatar} width={40}/>
                                    </td>
                                    <td>
                                        <text className="font_work_sans ml-2">
                                            Steam Name
                                        </text>
                                    </td>
                                </tr>
                                <tr className="back_content">
                                    <td>
                                        <tr>
                                            <text className="font_work_sans">
                                                Available To Claim
                                            </text>
                                        </tr>
                                        <tr>
                                            <td>
                                                <text className="text10" style={{marginLeft:"-80%"}}>
                                                    Total:
                                                </text>
                                            </td>
                                            <td>
                                                <text className="text14" style={{marginLeft:"-90%"}}>
                                                    1203 SCRP
                                                </text>
                                            </td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr className="back_content">
                                    <td>
                                        <tr>
                                            <text className="font_work_sans">
                                                Current Tier
                                            </text>
                                        </tr>
                                        <tr>
                                            <td>
                                                <text className="text10" style={{marginLeft:"-50%"}}>
                                                    Pool access:
                                                </text>
                                            </td>
                                            <td>
                                                <text className="text14">
                                                    Tier 1
                                                </text>
                                            </td>
                                        </tr>
                                    </td>
                                </tr>
                                
                            </td>
                            <td>
                                <tr className="back_content">
                                    <td>
                                        <img src={ArtistAvatar1} width={40}/>
                                    </td>
                                    <td>
                                        <text className="font_work_sans ml-2">
                                            Wallet Address
                                        </text>
                                    </td>
                                </tr>
                                <tr className="wallet_btn_red">
                                    <td>
                                        <text className="font_work_sans ml-2">
                                            Claim
                                        </text>
                                    </td>
                                </tr>
                                <tr className="wallet_btn_red">
                                    <td>
                                        <text className="font_work_sans ml-2">
                                            Upgrade
                                        </text>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>
            <div className="logined_user_list">
                <img src={LoginBetweenImg} className="login_between_bar"/>
                <table className="user_table">
                    <thead className="table_header">
                        <td>
                            <text className="text18 ml-4">#</text>
                        </td>                  
                        <td>    
                        <text className="text18  ml-4">Player</text>
                        </td>
                        <td>
                        <text className="text18  ml-20">
                                Tier
                            </text>
                        </td>
                        <td>
                        <text className="text18  ml-8">
                                Server
                            </text>
                        </td>
                        <td>
                        <text className="text18  ml-8">
                                Volumn
                            </text>
                        </td>                            
                    </thead>
                    <tbody className="table_body">
                            <tr className="user_member_btn">
                                <td className="text18 ml-4">
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">1</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar} width={40}/>
                                    <text className="userInfo font_work_sans user_name">Jaydon Ekstrom Bothman</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo">8000</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="text18 ml-4">
                                    
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">2</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar1} width={40}/>
                                    <text className="userInfo font_work_sans user_name">Ruben Carder</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo">8000</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="text18 ml-4">
                                    
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">3</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar2} width={40}/>
                                    <text className="userInfo font_work_sans user_name">Alfredo Septimus</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo">8000</text>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div> 
 
    );
}
export default Logined