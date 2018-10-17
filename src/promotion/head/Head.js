import React from "react";
import {Helmet} from 'react-helmet';

class Head extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps;
    }

    render() {
        return (
            <Helmet defer={false}>
                <meta charSet="UTF-8"/>
                <meta name="description" content="전세계 육아의 넘버 1 해결사! 리틀원"/>
                <meta name="keywords"
                      content="육아, 초보엄마, 스마트보틀, 스마트피피, 스마트템프, 정기배송, 기저귀, 분유, 커뮤니티, 아기, 아이, 엄마, 아빠, 가족, 육아일기, 다이어리"/>
                <meta name="google" content="notranslate"/>
                <meta name="author" content="리틀원"/>
                <meta name="title" content={this.props.title}/>
                <title>{this.props.title}</title>
                <meta name="twitter:title" content="LITTLEONE"/>
                <meta name="twitter:description" content="전세계 육아의 넘버 1 해결사! 리틀원"/>
                <meta name="twitter:image"
                      content="https://s3.ap-northeast-2.amazonaws.com/littleone/etc/littleone.png"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="theme-color" content="#3726af"/>
                <meta name="twitter:site" content="http://www.littleone.kr"/>
                <meta name="twitter:title" content="LITTLEONE"/>
                <meta name="twitter:player" content="http://www.littleone.kr"/>
                <meta name="twitter:player:width" content="800"/>
                <meta name="twitter:player:height" content="800"/>
                <meta property="og:description" content="전세계 육아의 넘버 1 해결사! 리틀원"/>
                <meta property="og:site_name" content="LITTLEONE"/>
                <meta property="og:url" content="http://www.littleone.kr"/>
                <meta property="og:title" content="LITTLEONE"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image"
                      content="https://s3.ap-northeast-2.amazonaws.com/littleone/etc/littleone.png"/>
                <meta property="og:image:secure_url"
                      content="https://s3.ap-northeast-2.amazonaws.com/littleone/etc/littleone.png"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="540"/>
                <meta property="og:image:height" content="540"/>
                <meta property="og:video:url" content="http://www.littleone.kr"/>
                <meta property="og:video:secure_url" content="http://www.littleone.kr"/>
                <meta property="og:video:type" content="application/x-shockwave-flash"/>
                <meta property="og:video:width" content="800"/>
                <meta property="og:video:height" content="800"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="format-detection" content="telephone=no, address=no, email=no"/>
                <meta name="msapplication-config" content="./favicon/browserconfig.xml"/>
                <meta name="msapplication-TileColor" content="#ffc40d"/>
                <meta name="msapplication-TileImage" content="./favicon/icon-144.png"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <link rel="icon" type="image/png" sizes="16x16" href="./favicon/icon-16.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon/icon-32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="./favicon/icon-96.png"/>
                <link rel="icon" type="image/png" sizes="144x144" href="./favicon/icon-144.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="./favicon/icon-192.png"/>
                <link rel="icon" type="image/png" sizes="196x196" href="./favicon/icon-196.png"/>
                <link rel="icon" href="./favicon/icon-144.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
                      href="./favicon/apple-touch-startup-image-1536-x-2008.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
                      href="./favicon/apple-touch-startup-image-1496-x-2048.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: portrait)"
                      href="./favicon/apple-touch-startup-image-768-x-1004.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: landscape)"
                      href="./favicon/apple-touch-startup-image-748-x-1024.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
                      href="./favicon/apple-touch-startup-image-1242-x-2148.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
                      href="./favicon/apple-touch-startup-image-1182-x-2208.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                      href="./favicon/apple-touch-startup-image-750-x-1294.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                      href="./favicon/apple-touch-startup-image-640-x-1096.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
                      href="./favicon/apple-touch-startup-image-640-x-920.png"/>
                <link rel="apple-touch-startup-image"
                      media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
                      href="./favicon/apple-touch-startup-image-320-x-460.png"/>
                <link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-57-x-57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-60-x-60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-72-x-72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-76-x-76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-114-x-114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-120-x-120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-144-x-144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-152-x-152.png"/>
                <link rel="apple-touch-icon" sizes="167x167" href="./favicon/apple-167-x-167.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-180-x-180.png"/>
                <link rel="apple-touch-icon" href="./favicon/apple-144-x-144.png"/>
                <link rel="manifest" href="./favicon/manifest.json"/>
                <link rel="mask-icon" href="./favicon/safari-pinned-tab-icon.svg"/>
            </Helmet>
        );
    }
}

export default Head;
