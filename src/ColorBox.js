import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import styles from "./styles/ColorBoxStyles"


function ColorBox(props) {
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
        if (isCopied) {
            let timeoutId = setTimeout(() => setIsCopied(false), 1500)
            return () => clearTimeout(timeoutId)
        }
    }, [isCopied, setIsCopied])

    const changeCopyState = () => {
        setIsCopied(true)
    };

    const {
        name,
        background,
        moreUrl,
        showingFullPalette,
        classes
    } = props;

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className={classes.ColorBox}>
                <div
                    style={{ background }}
                    className={classNames(classes.copyOverlay, {
                        [classes.showOverlay]: isCopied
                    })}
                />

                <div
                    className={classNames(classes.copyMessage, {
                        [classes.showMessage]: isCopied
                    })}
                >
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && (
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>MORE</span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    );
}
export default withStyles(styles)(ColorBox);