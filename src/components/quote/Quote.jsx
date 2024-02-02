import React from 'react';
import style from './Quote.module.css'


const Quote = () => {
    return (
			<blockquote className={style.blockquote}>
				<p className={style.blockquote__text}>
					"Tea is not just a drink, it's a way of life and a way to connect with
					our loved ones."
				</p>
			</blockquote>
		)
};

export default Quote;