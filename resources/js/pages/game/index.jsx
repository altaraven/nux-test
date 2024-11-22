import React, {memo, useCallback, useState, useEffect} from 'react'
import {Button, Link} from "@mui/material";
import {enqueueSnackbar} from 'notistack';
import {
    loadBetsHistory,
    getApiErrorFromResponse,
    loadGameLinkData,
    postMakeBet,
    postReGenerateGameLink, postDeactivateGameLink
} from "../../api/index.js";
import {withParams} from "../../components/WithParams.jsx";
import BetsHistoryTable from "../../components/BetsHistoryTable.jsx";
import GameResultArea from "../../components/GameResultArea.jsx";
import GameErrorScreen from "../../components/GameErrorScreen.jsx";

const GameIndex = ({params}) => {
    const [linkData, setLinkData] = useState({})
    const [reGeneratedLink, setReGeneratedLink] = useState(null)
    const [gameResult, setGameResult] = useState({})
    const [betsHistory, setBetsHistory] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        loadGameLinkData(params.hash)
            .then(({data}) => setLinkData(data.data))
            .catch(({response}) => {
                enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'})
                setErrorMessage(response.data.message);
            })
    }, [params, setLinkData])

    const onReGenerateLinkClick = useCallback(() => {
        return postReGenerateGameLink(params.hash)
            .then(({data}) => {
                setReGeneratedLink(data.data.link)
                enqueueSnackbar('Link successfully re-generated!', {variant: 'success'})
            })
            .catch(({response}) => enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'}))
    }, [enqueueSnackbar])

    const onDeactivateLinkClick = useCallback(() => {
        return postDeactivateGameLink(params.hash)
            .then(({data}) => {
                // setReGeneratedLink(data.data.link)
                enqueueSnackbar('Link successfully deactivated!', {variant: 'success'})
            })
            .catch(({response}) => enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'}))
    }, [enqueueSnackbar])

    const onGameResultClick = useCallback(() => {
        return postMakeBet(params.hash)
            .then(({data}) => {
                setGameResult(data.data)
                enqueueSnackbar('Game finished!', {variant: 'success'})
            })
            .catch(({response}) => enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'}))
    }, [enqueueSnackbar])

    const onHistoryClick = useCallback(() => {
        return loadBetsHistory(params.hash)
            .then(({data}) => {
                setBetsHistory(data.data)
                enqueueSnackbar('Bets history loaded', {variant: 'success'})
            })
            .catch(({response}) => enqueueSnackbar(getApiErrorFromResponse(response), {variant: 'error'}))
    }, [enqueueSnackbar])

    if (errorMessage) return <GameErrorScreen errorMessage={errorMessage} />

    return <>
        <div style={{width: '40rem'}} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
                <div className="mt-6" style={{height: '4rem'}}>
                    <Button onClick={onReGenerateLinkClick} variant="contained" color="info">Re-generate game
                        link</Button>
                    {reGeneratedLink && (
                        <Link style={{paddingLeft: '4rem'}} href={reGeneratedLink}>Game link</Link>
                    )}
                </div>
            </div>

            <div className="sm:col-span-4">
                <div className="mt-6" style={{height: '4rem'}}>
                    <Button onClick={onDeactivateLinkClick} variant="outlined" color="error">Deactivate game
                        link</Button>
                </div>
            </div>

            <div className="sm:col-span-4">
                <div className="mt-6" style={{minHeight: '4rem'}}>
                    <Button onClick={onGameResultClick} variant="contained" color="success">Imfeelinglucky</Button>
                    {gameResult.id && (
                        <GameResultArea data={gameResult}/>
                    )}
                </div>
            </div>

            <div className="sm:col-span-4">
                <div className="mt-6" style={{minHeight: '4rem'}}>
                    <Button onClick={onHistoryClick} variant="outlined">History</Button>
                    {betsHistory && (
                        <BetsHistoryTable rows={betsHistory}/>
                    )}
                </div>
            </div>
        </div>
    </>
}

export default withParams(memo(GameIndex))
