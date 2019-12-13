import React, { Component } from 'react';


// 引入less样式
import './App.less'
//引入图片 不知道怎么生成在线的动态图片,等页面搭建完毕后解决
import listImg from './GoodExperience/images/list_img/wushizhihun.jpg'

class goodExperience extends Component {
	render() {
		return (
			<div className={'experience-body'}>
				{/* 标题和副标题*/}
				<div className={'title'}>高分体验</div>
				<div className={'subtitle'}>在下趟旅程中，不妨预订由本地达人组织的体验活动</div>

				{/* 包裹首页列表的标签 承载着我的希望 */}
				<div className={'good-list'}>
					{/* 列表的每一项 */}
					<div className={'good-item'}>
						{/* 每一项的图片 */}
						<img
							className={'good-item-img'}
							alt={''}
							src={listImg}
						/>
						{/* 地区 */}
						<div className={'good-item-area'}>日本</div>
						{/* 每一项的标题 */}
						<div className={'good-item-title'}>感受武士之魂</div>
						{/* 每一项的价格 */}
						<div className={'good-item-price'}>每人￥634</div>
						{/* 评分 */}
						<div className={'good-item-score'}>
							{/* 评分-数字 */}
							<span className={'good-item-score-num'}>4.99</span>
							{/* 评分-星星 */}
							<span className={'good-item-score-star'}>星星</span>
							{/* 评分-人数 */}
							<span className={'good-item-score-people'}>(1004)</span>
						</div>
					</div>
				</div>

				{/* 查看更多体验 */}
				<div className={'lookMore'}>查看更多体验</div>
			</div>

		)
	}
}

export default goodExperience;