import React, {memo, useCallback, useState, useEffect} from 'react'
import {Button} from "@mui/material";
import {enqueueSnackbar} from 'notistack';
import {loadBetsHistory, getApiErrorFromResponse, loadGameLinkData, postMakeBet} from "../../api/index.js";
import {withParams} from "../../components/WithParams.jsx";
import BetsHistoryTable from "../../components/BetsHistoryTable.jsx";
import GameResultArea from "../../components/GameResultArea.jsx";
import GameErrorScreen from "../../components/GameErrorScreen.jsx";

const GameIndex = ({params}) => {
    const [linkData, setLinkData] = useState({})
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
        <Button onClick={onGameResultClick} variant="contained" color="success">Imfeelinglucky</Button>
        {gameResult.id && (
            <GameResultArea data={gameResult}/>
        )}

        <Button onClick={onHistoryClick} variant="outlined">History</Button>
        {betsHistory && (
            <BetsHistoryTable rows={betsHistory}/>
        )}
    </>
}

export default withParams(memo(GameIndex))
