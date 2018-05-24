import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { average, round } from '../utils'

const ScoreBoardResult = ({ rounds, numberOfRounds, actualRound }) => {
  const avgReactionTime = round(
    average(
      ...rounds
        .filter(round => round.goodReaction)
        .map(round => round.reactionTime)
    )
  )
  const finishedRounds = rounds.filter(round => round.playerReacted)
  const lastRound = finishedRounds[finishedRounds.length - 1]
  return (
    <View style={styles.scoreBoardResult}>
      <View style={styles.scoreRow}>
        <Text>{`Round ${actualRound} / ${numberOfRounds}`}</Text>
        <Text style={styles.last}>
          {lastRound && lastRound.playerReacted
            ? lastRound.goodReaction
              ? ` ${lastRound.reactionTime} ms`
              : '☠️'
            : ' - '}
        </Text>
      </View>
      <View style={styles.scoreRow}>
        <Text>Avgerage</Text>
        <Text style={styles.avg}>
          {avgReactionTime ? `${avgReactionTime} ms` : ' - '}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  scoreBoardResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avg: {
    fontSize: 20
  },
  last: {
    fontSize: 50
  }
})

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  numberOfRounds: state.game.numberOfRounds,
  actualRound: state.game.actualRound
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardResult)
