import React from 'react';
import '../../App.css'
import style from './Top.module.css'


const Top = () => {
    return (
			<section className={style.top}>
				<div className='container'>
					<div className={style.top__inner}>
						<h1 className={style.top__title}>
							A cup of tea is a moment of calm in the chaos of life
						</h1>
						<p className={style.top__text}>
							Wide selection of high-quality teas from all over the world,
							carefully curated by tea experts.
						</p>
					</div>
				</div>
			</section>
		)
};

export default Top;