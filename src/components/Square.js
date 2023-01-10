import React from 'react'
import PropTypes from 'prop-types'
import oIcon from '../assets/images/shapes/o.svg'
import xIcon from '../assets/images/shapes/x.svg'

const Square = ({ animation, className, handleOnClick, index, symbol, winningLine }) => {
    // Icon that fills a square on the board (X or O)
    const icon = symbol === 'O' ? oIcon : symbol === 'X' ? xIcon : null

    // Function that sets the animation for a win, draw or game in progress
    const setAnimation = () => {
        if (typeof animation === 'object') {
            return winningLine ? animation.line : animation.notLine
        } else {
            return animation
        }
    }

    return (
        <div className={className}>
            <button
                aria-label={`Square ${index}`}
                className="square__button"
                onClick={handleOnClick}
            >
                {icon && (
                    <img
                        alt={`${symbol} Icon`}
                        className={'square__symbol' + ' ' + setAnimation()}
                        src={icon}
                    />
                )}
            </button>
        </div>
    )
}

Square.propTypes = {
    animation: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    className: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    symbol: PropTypes.string,
    winningLine: PropTypes.bool.isRequired
}

export { Square as default }
