import React from "react";
import {Helmet} from 'react-helmet';

class Head extends React.Component {


    render() {
        return (
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta name="description" content="전세계 육아의 넘버 1 해결사! 리틀원, Littleone, promotion, kickstarter"/>
                <meta name="keywords" content="육아, 초보엄마, 스마트보틀, 스마트피피, 스마트템프, 정기배송, 기저귀, 분유, 커뮤니티, 아기, 아이, 엄마, 아빠, 가족, 육아일기, 다이어리"/>
                <meta name="author" content="리틀원"/>
                <meta name="title" content={this.props.title}/>
                <title>{this.props.title}</title>
                <meta property="og:description" content="전세계 육아의 넘버 1 해결사! 리틀원, Littleone, promotion, kickstarter"/>
                <meta property="og:site_name" content="LITTLEONE"/>
                <meta property="og:url" content="http://littleones.kr"/>
                <meta property="og:title" content="LITTLEONE"/>
                <meta property="og:image" content="./favicon/safari-pinned-tab.svg"/>
                <meta name="twitter:title" content="LITTLEONE"/>
                <meta name="twitter:description" content="전세계 육아의 넘버 1 해결사! 리틀원, Littleone, promotion, kickstarter"/>
                <meta name="twitter:image" content="./favicon/safari-pinned-tab.svg"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="theme-color" content="#2d3039"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="format-detection" content="telephone=no, address=no, email=no"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-TileImage" content="./favicon/apple-touch-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-touch-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-touch-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-touch-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-touch-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-touch-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-touch-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-touch-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-touch-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon-180x180.png"/>
                <link rel="icon" type="image/png" href="./favicon/favicon-32x32.png" sizes="32x32"/>
                <link rel="icon" type="image/png" href="./favicon/favicon-194x194.png" sizes="194x194"/>
                <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96"/>
                <link rel="icon" type="image/png" href="./favicon/android-chrome-192x192.png" sizes="192x192"/>
                <link rel="icon" type="image/png" href="./favicon/favicon-16x16.png" sizes="16x16"/>
                <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg}" color="#5bbad5"/>
            </Helmet>
        )
    }
}

export default Head;
