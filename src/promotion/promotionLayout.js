import React from 'react';

import '../library/_reset.scss';
import Loadable from 'react-loadable';
import Loading from "../component/loading/Loading";

const LoadableComponent = Loadable({
    loader: () => import('./index'),
    loading(){
        return <Loading/>
    }
});

class PromotionLayout extends React.Component {


    componentDidMount() {
        const color = {
            brown: "color:#560000;font-size:11px;",
            red: "color:#d83128;font-size:11px;",
            yellow: "color:#ea991b;font-size:11px;",
            green: "color:#93ba2f;font-size:11px;",
            blue: "color:#4da4e0;font-size:11px;",
            magenta: "color:#ff5274;font-size:11px",
            black: "color:#333333;font-size:11px",
            tangerineTango: 'color:#EF5442',
            violetPurple: 'color:#604C8D; font-size:11px'
        };

        console.log(
            "%c*************************************************************\n" +
            "%c                 __    __________________    ______          \n" +
            "%c                / /   /  _/_  __/_  __/ /   / ____/          \n" +
            "%c               / /    / /  / /   / / / /   / __/             \n" +
            "%c              / /____/ /  / /   / / / /___/ /___             \n" +
            "%c             /_____/___/ /_/   /_/ /_____/_____/             \n" +
            "%c                       ____   _   __._____                   \n" +
            "%c                     / __  / / | / / ____/                   \n" +
            "%c                    / / / / /  |/ / __/                      \n" +
            "%c                   / /_/ / / /|  / /___                      \n" +
            "%c                  ._____. /_/ |_/_____/                      \n\n" +
            "%c*************************************************************\n" +
            "%c 프론트 개발자 : %c김창현                                    \n" +
            "%c 백엔드 개발자 : %c장지수                                    \n" +
            "%c-------------현재 인하우스 개발 중입니다.ver Beta------------\n",
            color.green, color.red, color.magenta, color.magenta, color.magenta,
            color.magenta, color.magenta, color.magenta, color.magenta, color.magenta,
            color.magenta, color.green, color.tangerineTango, color.blue, color.tangerineTango,
            color.violetPurple, color.yellow
        );

        console.log("%c It's promotion-site !", color.green);

    }

    render() {
        return (
           <LoadableComponent/>
        )
    }


}

export default PromotionLayout;