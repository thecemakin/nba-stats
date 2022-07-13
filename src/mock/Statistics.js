export const GameStatisticsMockData = {
    "get": "games/statistics",
    "parameters": {
        "id": "10403"
    },
    "errors": [],
    "results": 2,
    "response": [
        {
            "team": {
                "id": 5,
                "name": "Charlotte Hornets",
                "nickname": "Hornets",
                "code": "CHA",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"
            },
            "statistics": [
                {
                    "fastBreakPoints": 15,
                    "pointsInPaint": 70,
                    "biggestLead": 28,
                    "secondChancePoints": 18,
                    "pointsOffTurnovers": 24,
                    "longestRun": 12,
                    "points": 141,
                    "fgm": 54,
                    "fga": 97,
                    "fgp": "55.7",
                    "ftm": 15,
                    "fta": 23,
                    "ftp": "65.2",
                    "tpm": 18,
                    "tpa": 42,
                    "tpp": "42.9",
                    "offReb": 15,
                    "defReb": 36,
                    "totReb": 51,
                    "assists": 36,
                    "pFouls": 22,
                    "steals": 13,
                    "turnovers": 18,
                    "blocks": 2,
                    "plusMinus": "22",
                    "min": "240:00"
                }
            ]
        },
        {
            "team": {
                "id": 10,
                "name": "Detroit Pistons",
                "nickname": "Pistons",
                "code": "DET",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Detroit_Pistons_primary_logo_2017.png/150px-Detroit_Pistons_primary_logo_2017.png"
            },
            "statistics": [
                {
                    "fastBreakPoints": 8,
                    "pointsInPaint": 52,
                    "biggestLead": 2,
                    "secondChancePoints": 13,
                    "pointsOffTurnovers": 24,
                    "longestRun": 12,
                    "points": 119,
                    "fgm": 48,
                    "fga": 102,
                    "fgp": "47.1",
                    "ftm": 11,
                    "fta": 18,
                    "ftp": "61.1",
                    "tpm": 12,
                    "tpa": 35,
                    "tpp": "34.3",
                    "offReb": 16,
                    "defReb": 29,
                    "totReb": 45,
                    "assists": 32,
                    "pFouls": 20,
                    "steals": 10,
                    "turnovers": 18,
                    "blocks": 6,
                    "plusMinus": "-22",
                    "min": "240:00"
                }
            ]
        }
    ]
}

export const TeamStatisticsMockData = {
    "get": "teams/statistics",
    "parameters": {
        "id": "1",
        "season": "2020"
    },
    "errors": [],
    "results": 1,
    "response": [
        {
            "games": 94,
            "fastBreakPoints": 941,
            "pointsInPaint": 4334,
            "biggestLead": 1237,
            "secondChancePoints": 1318,
            "pointsOffTurnovers": 1394,
            "longestRun": 1026,
            "points": 10550,
            "fgm": 3782,
            "fga": 8204,
            "fgp": "46.2",
            "ftm": 1829,
            "fta": 2261,
            "ftp": "80.9",
            "tpm": 1157,
            "tpa": 3174,
            "tpp": "36.3",
            "offReb": 971,
            "defReb": 3292,
            "totReb": 4263,
            "assists": 2197,
            "pFouls": 1870,
            "steals": 653,
            "turnovers": 1198,
            "blocks": 433,
            "plusMinus": 124
        }
    ]
}

export const PlayerStatisticsMockData = {
    "get": "players/statistics",
    "parameters": {
        "id": "236",
        "season": "2020"
    },
    "errors": [],
    "results": 75,
    "response": [
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8137
            },
            "points": 23,
            "pos": "SG",
            "min": "23:01",
            "fgm": 8,
            "fga": 17,
            "fgp": "47.1",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 5,
            "tpa": 11,
            "tpp": "45.5",
            "offReb": 0,
            "defReb": 0,
            "totReb": 0,
            "assists": 1,
            "pFouls": 1,
            "steals": 1,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "-14",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8150
            },
            "points": 6,
            "pos": "SG",
            "min": "25:40",
            "fgm": 2,
            "fga": 10,
            "fgp": "20.0",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 2,
            "tpa": 7,
            "tpp": "28.6",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 7,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "4",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8159
            },
            "points": 18,
            "pos": "SG",
            "min": "23:42",
            "fgm": 6,
            "fga": 14,
            "fgp": "42.9",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 5,
            "tpa": 10,
            "tpp": "50.0",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 2,
            "pFouls": 1,
            "steals": 1,
            "turnovers": 0,
            "blocks": 1,
            "plusMinus": "0",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8169
            },
            "points": 11,
            "pos": "SG",
            "min": "29:36",
            "fgm": 3,
            "fga": 13,
            "fgp": "23.1",
            "ftm": 2,
            "fta": 3,
            "ftp": "66.7",
            "tpm": 3,
            "tpa": 9,
            "tpp": "33.3",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 1,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "-10",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7527
            },
            "points": 22,
            "pos": "SG",
            "min": "41:07",
            "fgm": 7,
            "fga": 15,
            "fgp": "46.7",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 5,
            "tpa": 11,
            "tpp": "45.5",
            "offReb": 1,
            "defReb": 3,
            "totReb": 4,
            "assists": 3,
            "pFouls": 5,
            "steals": 1,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "-2",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7538
            },
            "points": 14,
            "pos": "SG",
            "min": "34:41",
            "fgm": 4,
            "fga": 14,
            "fgp": "28.6",
            "ftm": 4,
            "fta": 6,
            "ftp": "66.7",
            "tpm": 2,
            "tpa": 7,
            "tpp": "28.6",
            "offReb": 1,
            "defReb": 3,
            "totReb": 4,
            "assists": 0,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "1",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7547
            },
            "points": 17,
            "pos": "SG",
            "min": "33:55",
            "fgm": 6,
            "fga": 16,
            "fgp": "37.5",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 3,
            "tpa": 9,
            "tpp": "33.3",
            "offReb": 0,
            "defReb": 0,
            "totReb": 0,
            "assists": 3,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 1,
            "blocks": 1,
            "plusMinus": "-18",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8236
            },
            "points": 12,
            "pos": "SG",
            "min": "34:37",
            "fgm": 4,
            "fga": 10,
            "fgp": "40.0",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 3,
            "tpa": 7,
            "tpp": "42.9",
            "offReb": 1,
            "defReb": 7,
            "totReb": 8,
            "assists": 3,
            "pFouls": 2,
            "steals": 0,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "8",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8246
            },
            "points": 19,
            "pos": "SG",
            "min": "37:47",
            "fgm": 7,
            "fga": 18,
            "fgp": "38.9",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 15,
            "tpp": "33.3",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 5,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-9",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8260
            },
            "points": 17,
            "pos": "SG",
            "min": "37:31",
            "fgm": 6,
            "fga": 17,
            "fgp": "35.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 12,
            "tpp": "41.7",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 2,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "-3",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8282
            },
            "points": 10,
            "pos": "SG",
            "min": "29:59",
            "fgm": 3,
            "fga": 12,
            "fgp": "25.0",
            "ftm": 1,
            "fta": 2,
            "ftp": "50.0",
            "tpm": 3,
            "tpa": 11,
            "tpp": "27.3",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 1,
            "pFouls": 2,
            "steals": 0,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-21",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8298
            },
            "points": 10,
            "pos": "SG",
            "min": "35:11",
            "fgm": 3,
            "fga": 15,
            "fgp": "20.0",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 2,
            "tpa": 9,
            "tpp": "22.2",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 3,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "7",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8313
            },
            "points": 15,
            "pos": "SG",
            "min": "32:26",
            "fgm": 6,
            "fga": 14,
            "fgp": "42.9",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 3,
            "tpa": 9,
            "tpp": "33.3",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 6,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "-18",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8321
            },
            "points": 8,
            "pos": "SG",
            "min": "25:54",
            "fgm": 3,
            "fga": 10,
            "fgp": "30.0",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 2,
            "tpa": 8,
            "tpp": "25.0",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 1,
            "pFouls": 2,
            "steals": 0,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-26",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8337
            },
            "points": 18,
            "pos": "SG",
            "min": "30:46",
            "fgm": 6,
            "fga": 11,
            "fgp": "54.5",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 6,
            "tpa": 11,
            "tpp": "54.5",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 3,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "0",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8354
            },
            "points": 26,
            "pos": "SG",
            "min": "38:15",
            "fgm": 9,
            "fga": 21,
            "fgp": "42.9",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 8,
            "tpa": 18,
            "tpp": "44.4",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 5,
            "pFouls": 5,
            "steals": 1,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "3",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8369
            },
            "points": 9,
            "pos": "SG",
            "min": "29:15",
            "fgm": 3,
            "fga": 11,
            "fgp": "27.3",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 2,
            "tpa": 9,
            "tpp": "22.2",
            "offReb": 0,
            "defReb": 1,
            "totReb": 1,
            "assists": 5,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-26",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7709
            },
            "points": 18,
            "pos": "SG",
            "min": "35:44",
            "fgm": 5,
            "fga": 12,
            "fgp": "41.7",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 5,
            "tpa": 11,
            "tpp": "45.5",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 3,
            "pFouls": 4,
            "steals": 1,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "13",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7732
            },
            "points": 13,
            "pos": "SG",
            "min": "28:41",
            "fgm": 5,
            "fga": 12,
            "fgp": "41.7",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 3,
            "tpa": 7,
            "tpp": "42.9",
            "offReb": 0,
            "defReb": 2,
            "totReb": 2,
            "assists": 3,
            "pFouls": 1,
            "steals": 3,
            "turnovers": 4,
            "blocks": 1,
            "plusMinus": "-12",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7749
            },
            "points": 11,
            "pos": "SG",
            "min": "29:20",
            "fgm": 4,
            "fga": 11,
            "fgp": "36.4",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 3,
            "tpa": 6,
            "tpp": "50.0",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 2,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "12",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7781
            },
            "points": 29,
            "pos": "SG",
            "min": "37:30",
            "fgm": 10,
            "fga": 17,
            "fgp": "58.8",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 7,
            "tpa": 12,
            "tpp": "58.3",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 3,
            "pFouls": 2,
            "steals": 3,
            "turnovers": 1,
            "blocks": 1,
            "plusMinus": "16",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7800
            },
            "points": 22,
            "pos": "SG",
            "min": "39:37",
            "fgm": 7,
            "fga": 12,
            "fgp": "58.3",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 5,
            "tpa": 8,
            "tpp": "62.5",
            "offReb": 1,
            "defReb": 2,
            "totReb": 3,
            "assists": 2,
            "pFouls": 1,
            "steals": 1,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "7",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7809
            },
            "points": 18,
            "pos": "SG",
            "min": "36:39",
            "fgm": 6,
            "fga": 15,
            "fgp": "40.0",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 6,
            "tpa": 13,
            "tpp": "46.2",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 3,
            "pFouls": 3,
            "steals": 3,
            "turnovers": 4,
            "blocks": 0,
            "plusMinus": "4",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7825
            },
            "points": 16,
            "pos": "SG",
            "min": "39:00",
            "fgm": 4,
            "fga": 16,
            "fgp": "25.0",
            "ftm": 4,
            "fta": 6,
            "ftp": "66.7",
            "tpm": 4,
            "tpa": 15,
            "tpp": "26.7",
            "offReb": 1,
            "defReb": 7,
            "totReb": 8,
            "assists": 3,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "12",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8517
            },
            "points": 15,
            "pos": "SG",
            "min": "38:10",
            "fgm": 5,
            "fga": 16,
            "fgp": "31.2",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 3,
            "tpa": 10,
            "tpp": "30.0",
            "offReb": 1,
            "defReb": 9,
            "totReb": 10,
            "assists": 0,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "8",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8533
            },
            "points": 5,
            "pos": "SG",
            "min": "39:05",
            "fgm": 1,
            "fga": 11,
            "fgp": "9.1",
            "ftm": 3,
            "fta": 4,
            "ftp": "75.0",
            "tpm": 0,
            "tpa": 9,
            "tpp": "0.0",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 7,
            "pFouls": 0,
            "steals": 0,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "1",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8547
            },
            "points": 22,
            "pos": "SG",
            "min": "37:59",
            "fgm": 7,
            "fga": 18,
            "fgp": "38.9",
            "ftm": 5,
            "fta": 5,
            "ftp": "100",
            "tpm": 3,
            "tpa": 9,
            "tpp": "33.3",
            "offReb": 1,
            "defReb": 8,
            "totReb": 9,
            "assists": 2,
            "pFouls": 1,
            "steals": 0,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "7",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8562
            },
            "points": 21,
            "pos": "SG",
            "min": "37:51",
            "fgm": 7,
            "fga": 20,
            "fgp": "35.0",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 6,
            "tpa": 16,
            "tpp": "37.5",
            "offReb": 0,
            "defReb": 8,
            "totReb": 8,
            "assists": 4,
            "pFouls": 5,
            "steals": 0,
            "turnovers": 3,
            "blocks": 1,
            "plusMinus": "-8",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8586
            },
            "points": 19,
            "pos": "SG",
            "min": "33:17",
            "fgm": 7,
            "fga": 15,
            "fgp": "46.7",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 12,
            "tpp": "41.7",
            "offReb": 1,
            "defReb": 3,
            "totReb": 4,
            "assists": 4,
            "pFouls": 5,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "-19",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8599
            },
            "points": 8,
            "pos": "SG",
            "min": "31:33",
            "fgm": 2,
            "fga": 10,
            "fgp": "20.0",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 1,
            "tpa": 8,
            "tpp": "12.5",
            "offReb": 2,
            "defReb": 4,
            "totReb": 6,
            "assists": 1,
            "pFouls": 2,
            "steals": 0,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-11",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8607
            },
            "points": 21,
            "pos": "SF",
            "min": "33:51",
            "fgm": 7,
            "fga": 13,
            "fgp": "53.8",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 6,
            "tpa": 9,
            "tpp": "66.7",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 4,
            "pFouls": 1,
            "steals": 1,
            "turnovers": 4,
            "blocks": 0,
            "plusMinus": "-15",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8628
            },
            "points": 5,
            "pos": "SG",
            "min": "24:45",
            "fgm": 2,
            "fga": 10,
            "fgp": "20.0",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 1,
            "tpa": 8,
            "tpp": "12.5",
            "offReb": 0,
            "defReb": 0,
            "totReb": 0,
            "assists": 3,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-10",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8641
            },
            "points": 23,
            "pos": "SG",
            "min": "35:28",
            "fgm": 10,
            "fga": 21,
            "fgp": "47.6",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 3,
            "tpa": 11,
            "tpp": "27.3",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 3,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "2",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8652
            },
            "points": 13,
            "pos": "SG",
            "min": "30:50",
            "fgm": 3,
            "fga": 13,
            "fgp": "23.1",
            "ftm": 5,
            "fta": 6,
            "ftp": "83.3",
            "tpm": 2,
            "tpa": 10,
            "tpp": "20.0",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 3,
            "pFouls": 1,
            "steals": 0,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "-10",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8663
            },
            "points": 11,
            "pos": "SG",
            "min": "36:34",
            "fgm": 3,
            "fga": 9,
            "fgp": "33.3",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 3,
            "tpa": 6,
            "tpp": "50.0",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 4,
            "pFouls": 1,
            "steals": 1,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-7",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8681
            },
            "points": 9,
            "pos": "PG",
            "min": "30:14",
            "fgm": 3,
            "fga": 9,
            "fgp": "33.3",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 2,
            "tpa": 7,
            "tpp": "28.6",
            "offReb": 1,
            "defReb": 3,
            "totReb": 4,
            "assists": 1,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-22",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8685
            },
            "points": 14,
            "pos": "SG",
            "min": "37:40",
            "fgm": 4,
            "fga": 14,
            "fgp": "28.6",
            "ftm": 3,
            "fta": 5,
            "ftp": "60.0",
            "tpm": 3,
            "tpa": 9,
            "tpp": "33.3",
            "offReb": 0,
            "defReb": 2,
            "totReb": 2,
            "assists": 3,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "2",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8036
            },
            "points": 30,
            "pos": "SG",
            "min": "38:48",
            "fgm": 10,
            "fga": 17,
            "fgp": "58.8",
            "ftm": 2,
            "fta": 3,
            "ftp": "66.7",
            "tpm": 8,
            "tpa": 15,
            "tpp": "53.3",
            "offReb": 0,
            "defReb": 2,
            "totReb": 2,
            "assists": 7,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "12",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8059
            },
            "points": 29,
            "pos": "SG",
            "min": "42:09",
            "fgm": 11,
            "fga": 15,
            "fgp": "73.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 7,
            "tpa": 11,
            "tpp": "63.6",
            "offReb": 1,
            "defReb": 5,
            "totReb": 6,
            "assists": 6,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "1",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8066
            },
            "points": 21,
            "pos": "SG",
            "min": "37:02",
            "fgm": 8,
            "fga": 17,
            "fgp": "47.1",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 12,
            "tpp": "41.7",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 3,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-5",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8806
            },
            "points": 20,
            "pos": "SG",
            "min": "38:09",
            "fgm": 7,
            "fga": 19,
            "fgp": "36.8",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 5,
            "tpa": 13,
            "tpp": "38.5",
            "offReb": 1,
            "defReb": 5,
            "totReb": 6,
            "assists": 7,
            "pFouls": 1,
            "steals": 2,
            "turnovers": 1,
            "blocks": 1,
            "plusMinus": "14",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8818
            },
            "points": 10,
            "pos": "SG",
            "min": "36:48",
            "fgm": 4,
            "fga": 16,
            "fgp": "25.0",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 2,
            "tpa": 11,
            "tpp": "18.2",
            "offReb": 3,
            "defReb": 1,
            "totReb": 4,
            "assists": 5,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "-15",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8830
            },
            "points": 23,
            "pos": "SG",
            "min": "36:49",
            "fgm": 8,
            "fga": 14,
            "fgp": "57.1",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 5,
            "tpa": 11,
            "tpp": "45.5",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 3,
            "pFouls": 1,
            "steals": 2,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "6",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8128
            },
            "points": 16,
            "pos": "SF",
            "min": "30:47",
            "fgm": 4,
            "fga": 13,
            "fgp": "30.8",
            "ftm": 5,
            "fta": 5,
            "ftp": "100",
            "tpm": 3,
            "tpa": 9,
            "tpp": "33.3",
            "offReb": 1,
            "defReb": 4,
            "totReb": 5,
            "assists": 3,
            "pFouls": 4,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-1",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8859
            },
            "points": 22,
            "pos": "SF",
            "min": "38:00",
            "fgm": 8,
            "fga": 15,
            "fgp": "53.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 6,
            "tpa": 13,
            "tpp": "46.2",
            "offReb": 1,
            "defReb": 4,
            "totReb": 5,
            "assists": 3,
            "pFouls": 4,
            "steals": 0,
            "turnovers": 1,
            "blocks": 2,
            "plusMinus": "10",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8869
            },
            "points": 25,
            "pos": "SF",
            "min": "34:07",
            "fgm": 9,
            "fga": 17,
            "fgp": "52.9",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 7,
            "tpa": 13,
            "tpp": "53.8",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 3,
            "pFouls": 1,
            "steals": 0,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-19",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8881
            },
            "points": 19,
            "pos": "SF",
            "min": "38:11",
            "fgm": 7,
            "fga": 17,
            "fgp": "41.2",
            "ftm": 0,
            "fta": 1,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 10,
            "tpp": "50.0",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 2,
            "pFouls": 2,
            "steals": 0,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "19",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8186
            },
            "points": 14,
            "pos": "SF",
            "min": "38:24",
            "fgm": 5,
            "fga": 18,
            "fgp": "27.8",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 4,
            "tpa": 13,
            "tpp": "30.8",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 3,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "-3",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8191
            },
            "points": 16,
            "pos": "SF",
            "min": "29:49",
            "fgm": 6,
            "fga": 11,
            "fgp": "54.5",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 4,
            "tpa": 9,
            "tpp": "44.4",
            "offReb": 1,
            "defReb": 5,
            "totReb": 6,
            "assists": 6,
            "pFouls": 1,
            "steals": 0,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "12",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8211
            },
            "points": 10,
            "pos": "SF",
            "min": "31:57",
            "fgm": 4,
            "fga": 9,
            "fgp": "44.4",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 2,
            "tpa": 7,
            "tpp": "28.6",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 1,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "9",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8942
            },
            "points": 20,
            "pos": "SF",
            "min": "33:43",
            "fgm": 7,
            "fga": 13,
            "fgp": "53.8",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 5,
            "tpa": 9,
            "tpp": "55.6",
            "offReb": 1,
            "defReb": 3,
            "totReb": 4,
            "assists": 1,
            "pFouls": 4,
            "steals": 1,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "13",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8956
            },
            "points": 14,
            "pos": "SF",
            "min": "31:08",
            "fgm": 5,
            "fga": 18,
            "fgp": "27.8",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 4,
            "tpa": 12,
            "tpp": "33.3",
            "offReb": 0,
            "defReb": 1,
            "totReb": 1,
            "assists": 1,
            "pFouls": 1,
            "steals": 1,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-12",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8974
            },
            "points": 7,
            "pos": "SF",
            "min": "28:50",
            "fgm": 3,
            "fga": 11,
            "fgp": "27.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 1,
            "tpa": 9,
            "tpp": "11.1",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 3,
            "pFouls": 4,
            "steals": 3,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "-19",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8982
            },
            "points": 19,
            "pos": "SF",
            "min": "31:48",
            "fgm": 7,
            "fga": 12,
            "fgp": "58.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 8,
            "tpp": "62.5",
            "offReb": 1,
            "defReb": 2,
            "totReb": 3,
            "assists": 4,
            "pFouls": 1,
            "steals": 0,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "-2",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8993
            },
            "points": 18,
            "pos": "SF",
            "min": "32:22",
            "fgm": 6,
            "fga": 17,
            "fgp": "35.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 6,
            "tpa": 16,
            "tpp": "37.5",
            "offReb": 0,
            "defReb": 7,
            "totReb": 7,
            "assists": 3,
            "pFouls": 2,
            "steals": 2,
            "turnovers": 3,
            "blocks": 1,
            "plusMinus": "-2",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9017
            },
            "points": 15,
            "pos": "SG",
            "min": "32:55",
            "fgm": 5,
            "fga": 13,
            "fgp": "38.5",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 12,
            "tpp": "41.7",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 0,
            "pFouls": 4,
            "steals": 0,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "-7",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9029
            },
            "points": 19,
            "pos": "SG",
            "min": "33:56",
            "fgm": 7,
            "fga": 17,
            "fgp": "41.2",
            "ftm": 1,
            "fta": 2,
            "ftp": "50.0",
            "tpm": 4,
            "tpa": 13,
            "tpp": "30.8",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 7,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 0,
            "blocks": 0,
            "plusMinus": "-2",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9067
            },
            "points": 19,
            "pos": "SG",
            "min": "35:42",
            "fgm": 6,
            "fga": 13,
            "fgp": "46.2",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 4,
            "tpa": 9,
            "tpp": "44.4",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 2,
            "pFouls": 3,
            "steals": 1,
            "turnovers": 3,
            "blocks": 2,
            "plusMinus": "6",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9071
            },
            "points": 24,
            "pos": "SG",
            "min": "33:23",
            "fgm": 8,
            "fga": 13,
            "fgp": "61.5",
            "ftm": 3,
            "fta": 5,
            "ftp": "60.0",
            "tpm": 5,
            "tpa": 10,
            "tpp": "50.0",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 2,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-8",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8375
            },
            "points": 2,
            "pos": "SG",
            "min": "22:41",
            "fgm": 1,
            "fga": 5,
            "fgp": "20.0",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 0,
            "tpa": 4,
            "tpp": "0.0",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 1,
            "pFouls": 0,
            "steals": 2,
            "turnovers": 0,
            "blocks": 1,
            "plusMinus": "8",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8389
            },
            "points": 11,
            "pos": "SG",
            "min": "29:33",
            "fgm": 3,
            "fga": 11,
            "fgp": "27.3",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 3,
            "tpa": 11,
            "tpp": "27.3",
            "offReb": 0,
            "defReb": 4,
            "totReb": 4,
            "assists": 2,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 2,
            "blocks": 1,
            "plusMinus": "-8",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8400
            },
            "points": 29,
            "pos": "SG",
            "min": "38:08",
            "fgm": 11,
            "fga": 16,
            "fgp": "68.8",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 7,
            "tpa": 11,
            "tpp": "63.6",
            "offReb": 1,
            "defReb": 5,
            "totReb": 6,
            "assists": 5,
            "pFouls": 3,
            "steals": 0,
            "turnovers": 1,
            "blocks": 1,
            "plusMinus": "13",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8424
            },
            "points": 25,
            "pos": "SG",
            "min": "36:35",
            "fgm": 9,
            "fga": 13,
            "fgp": "69.2",
            "ftm": 1,
            "fta": 1,
            "ftp": "100",
            "tpm": 6,
            "tpa": 8,
            "tpp": "75.0",
            "offReb": 1,
            "defReb": 5,
            "totReb": 6,
            "assists": 3,
            "pFouls": 5,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "-9",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8435
            },
            "points": 16,
            "pos": "SG",
            "min": "30:37",
            "fgm": 5,
            "fga": 12,
            "fgp": "41.7",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 4,
            "tpa": 7,
            "tpp": "57.1",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 5,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "10",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8451
            },
            "points": 18,
            "pos": "SG",
            "min": "30:38",
            "fgm": 6,
            "fga": 12,
            "fgp": "50.0",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 3,
            "tpa": 6,
            "tpp": "50.0",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 7,
            "pFouls": 2,
            "steals": 2,
            "turnovers": 2,
            "blocks": 3,
            "plusMinus": "-21",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8465
            },
            "points": 2,
            "pos": "SG",
            "min": "32:23",
            "fgm": 1,
            "fga": 11,
            "fgp": "9.1",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 0,
            "tpa": 5,
            "tpp": "0.0",
            "offReb": 2,
            "defReb": 4,
            "totReb": 6,
            "assists": 7,
            "pFouls": 1,
            "steals": 2,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "13",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8479
            },
            "points": 27,
            "pos": "SG",
            "min": "42:06",
            "fgm": 9,
            "fga": 19,
            "fgp": "47.4",
            "ftm": 3,
            "fta": 4,
            "ftp": "75.0",
            "tpm": 6,
            "tpa": 10,
            "tpp": "60.0",
            "offReb": 0,
            "defReb": 6,
            "totReb": 6,
            "assists": 3,
            "pFouls": 4,
            "steals": 0,
            "turnovers": 4,
            "blocks": 1,
            "plusMinus": "17",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8497
            },
            "points": 18,
            "pos": "SG",
            "min": "37:32",
            "fgm": 5,
            "fga": 16,
            "fgp": "31.2",
            "ftm": 3,
            "fta": 3,
            "ftp": "100",
            "tpm": 5,
            "tpa": 13,
            "tpp": "38.5",
            "offReb": 0,
            "defReb": 11,
            "totReb": 11,
            "assists": 4,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 1,
            "blocks": 1,
            "plusMinus": "11",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 8502
            },
            "points": 16,
            "pos": "SG",
            "min": "39:59",
            "fgm": 6,
            "fga": 16,
            "fgp": "37.5",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 4,
            "tpa": 11,
            "tpp": "36.4",
            "offReb": 0,
            "defReb": 8,
            "totReb": 8,
            "assists": 8,
            "pFouls": 2,
            "steals": 2,
            "turnovers": 3,
            "blocks": 0,
            "plusMinus": "17",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9239
            },
            "points": 17,
            "pos": "SG",
            "min": "38:54",
            "fgm": 5,
            "fga": 14,
            "fgp": "35.7",
            "ftm": 2,
            "fta": 2,
            "ftp": "100",
            "tpm": 5,
            "tpa": 12,
            "tpp": "41.7",
            "offReb": 0,
            "defReb": 5,
            "totReb": 5,
            "assists": 6,
            "pFouls": 2,
            "steals": 2,
            "turnovers": 6,
            "blocks": 0,
            "plusMinus": "-4",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9253
            },
            "points": 14,
            "pos": "SG",
            "min": "28:53",
            "fgm": 5,
            "fga": 11,
            "fgp": "45.5",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 4,
            "tpa": 10,
            "tpp": "40.0",
            "offReb": 1,
            "defReb": 4,
            "totReb": 5,
            "assists": 7,
            "pFouls": 0,
            "steals": 1,
            "turnovers": 1,
            "blocks": 2,
            "plusMinus": "30",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9268
            },
            "points": 21,
            "pos": "SG",
            "min": "30:36",
            "fgm": 8,
            "fga": 15,
            "fgp": "53.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 5,
            "tpa": 11,
            "tpp": "45.5",
            "offReb": 0,
            "defReb": 3,
            "totReb": 3,
            "assists": 6,
            "pFouls": 4,
            "steals": 1,
            "turnovers": 4,
            "blocks": 0,
            "plusMinus": "17",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7763
            },
            "points": 16,
            "pos": "SG",
            "min": "34:39",
            "fgm": 6,
            "fga": 17,
            "fgp": "35.3",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 4,
            "tpa": 10,
            "tpp": "40.0",
            "offReb": 1,
            "defReb": 3,
            "totReb": 4,
            "assists": 6,
            "pFouls": 2,
            "steals": 1,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-4",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 7771
            },
            "points": 11,
            "pos": "SG",
            "min": "28:44",
            "fgm": 4,
            "fga": 9,
            "fgp": "44.4",
            "ftm": 0,
            "fta": 0,
            "ftp": "0.0",
            "tpm": 3,
            "tpa": 8,
            "tpp": "37.5",
            "offReb": 1,
            "defReb": 1,
            "totReb": 2,
            "assists": 5,
            "pFouls": 2,
            "steals": 0,
            "turnovers": 2,
            "blocks": 0,
            "plusMinus": "-3",
            "comment": null
        },
        {
            "player": {
                "id": 236,
                "firstname": "Buddy",
                "lastname": "Hield"
            },
            "team": {
                "id": 30,
                "name": "Sacramento Kings",
                "nickname": "Kings",
                "code": "SAC",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"
            },
            "game": {
                "id": 9305
            },
            "points": 13,
            "pos": "SG",
            "min": "30:43",
            "fgm": 5,
            "fga": 12,
            "fgp": "41.7",
            "ftm": 2,
            "fta": 3,
            "ftp": "66.7",
            "tpm": 1,
            "tpa": 7,
            "tpp": "14.3",
            "offReb": 1,
            "defReb": 6,
            "totReb": 7,
            "assists": 9,
            "pFouls": 0,
            "steals": 1,
            "turnovers": 1,
            "blocks": 0,
            "plusMinus": "-16",
            "comment": null
        }
    ]
}

