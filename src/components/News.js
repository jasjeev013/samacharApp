import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "autosport.com"
            },
            "author": "Joey Barnes",
            "title": "Indy 500: Newgarden beats O'Ward for back-to-back wins - Autosport",
            "description": "Team Penske’s Josef Newgarden fought off Pato O’Ward in a last-lap showdown to take back-to-back Indianapolis 500 victories.",
            "url": "https://www.autosport.com/indycar/news/indy-500-newgarden/10616310/",
            "urlToImage": "https://cdn-7.motorsport.com/images/amp/YpNMQaj0/s6/josef-newgarden-team-penske-ch.jpg",
            "publishedAt": "2024-05-27T07:05:52Z",
            "content": "Despite a four-hour rain delay, the clouds diminished and an intense battle finished as the sun set on more than 300,000 fans at the Indianapolis Motor Speedway.\r\nNewgarden, who started third, was fo… [+2798 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "HYUNG-JIN KIM, HUIZHONG WU",
            "title": "South Korea, China and Japan resume trilateral meeting to revive cooperation - The Associated Press",
            "description": "China’s premier has agreed to revive three-way cooperation with South Korea and Japan in the face of shared challenges but issued a veiled rebuke against the two countries’ expanding security cooperation with the United States. Chinese Premier Li Qiang met So…",
            "url": "https://apnews.com/article/south-korea-china-japan-trilateral-6afe4c3e280995a7fc16696edbd0a345",
            "urlToImage": "https://dims.apnews.com/dims4/default/aac5b44/2147483647/strip/true/crop/3689x2075+140+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F70%2Fd1%2Ffcdf1693f8fc1d050145ec397269%2F6a871a2e88314e7ba57d989eee2da6e1",
            "publishedAt": "2024-05-27T06:51:00Z",
            "content": "SEOUL, South Korea (AP) Chinas premier agreed Monday to revive three-way cooperation with South Korea and Japan in the face of shared challenges, but issued a veiled rebuke against the two countries … [+5972 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "GERALD IMRAY",
            "title": "South Africa's election could bring the biggest political shift since it became a democracy in 1994 - The Associated Press",
            "description": "South Africans will vote Wednesday to decide whether their country takes its most significant political step since it brought down apartheid and achieved democracy 30 years ago. This national election will not be as momentous as the one South Africa held in 1…",
            "url": "https://apnews.com/article/south-africa-election-anc-apartheid-9215778b4184e2fcb02a9008f3558975",
            "urlToImage": "https://dims.apnews.com/dims4/default/d406b20/2147483647/strip/true/crop/5500x3094+0+286/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F5b%2F2f%2Fcb89b926059abb8024ea7680cee1%2F8f8adbb2ed5a47b383bae7208ca060ae",
            "publishedAt": "2024-05-27T05:01:00Z",
            "content": "CAPE TOWN, South Africa (AP) South Africans will vote Wednesday to decide whether their country will take its most significant political step since the moment 30 years ago when it brought down aparth… [+5740 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KTVI Fox 2 St. Louis"
            },
            "author": "Chris Higgins, Max Diekneite",
            "title": "Severe weather brings hail, tornado warnings to St. Louis area - KTVI Fox 2 St. Louis",
            "description": "The St. Louis region was slammed by severe weather late afternoon and early Sunday evening. A storm system moved over the entire viewing area, leading to tornado warnings, heavy rain, and plenty of hail piling up quickly across the area in various sizes.",
            "url": "https://fox2now.com/news/missouri/severe-weather-brings-hail-tornado-warnings-to-st-louis-area/",
            "urlToImage": "https://fox2now.com/wp-content/uploads/sites/14/2024/05/snapshot-13-3.jpg?w=1280",
            "publishedAt": "2024-05-27T03:59:52Z",
            "content": "ST. LOUIS The St. Louis region was slammed by severe weather late afternoon and early Sunday evening. A storm system moved over the entire viewing area, leading to tornado warnings, heavy rain, and p… [+218 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": null,
            "title": "France to lift state of emergency in efforts to allow political dialogue in riot-hit New Caledonia - The Associated Press",
            "description": "French President Emmanuel Macron has decided to lift the state of emergency in the French Pacific territory of New Caledonia. Macron's office said the move is meant to allow political dialogue following the unrest that left seven dead and a trail of destructi…",
            "url": "https://apnews.com/article/new-caledonia-france-kanak-097b74f915c025c4a3fae8ca73f4e28a",
            "urlToImage": "https://dims.apnews.com/dims4/default/0c6bd0e/2147483647/strip/true/crop/7952x4473+0+415/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc6%2F27%2F5eb42a6007a06a5a7e61f36b06d9%2Fe578644a38a74759bd49e1dca5ede513",
            "publishedAt": "2024-05-27T03:52:00Z",
            "content": "PARIS (AP) French President Emmanuel Macron decided Monday to lift the state of emergency in the French Pacific territory of New Caledonia in a move meant to allow political dialogue following the un… [+2577 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Ryan Young",
            "title": "NBA playoffs: Luka Dončić, Mavericks power past Anthony Edwards to take a 3-0 lead over Timberwolves - Yahoo Sports",
            "description": "The Mavericks are now just one win away from their first NBA Finals trip since 2011.",
            "url": "https://sports.yahoo.com/nba-playoffs-luka-doncic-mavericks-power-past-anthony-edwards-to-take-a-3-0-lead-over-timberwolves-024023251.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/VaLCSmmw628fKmbty._s6w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-05/8a404f80-1bd1-11ef-bfba-149ad8772b2d",
            "publishedAt": "2024-05-27T03:41:00Z",
            "content": "Anthony Edwards turned it on in the second half on Sunday night in an attempt to keep the Minnesota Timberwolves season alive.\r\nHis run, though, came just a bit too late.\r\nLuka Doni and the Dallas Ma… [+4083 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WZTV"
            },
            "author": "Adrian Mojica",
            "title": "CODE RED ALERT: All of Middle Tennessee placed under Tornado Watch - WZTV",
            "description": "NASHVILLE, Tenn.--Parts of Middle Tennessee, including Nashville, have been upgraded to a 'Moderate' risk (Level 4 of 5) of severe weather Sunday night into Mon",
            "url": "https://fox17.com/news/local/code-red-alert-upgraded-risk-for-severe-storms-tornadoes-in-middle-tennessee-tonight",
            "urlToImage": "https://fox17.com/resources/media/5a33a3fa-2148-4a20-ba57-7f32cf8e17cb-large16x9_GOjY9HNaEAEMpQP.jpg",
            "publishedAt": "2024-05-27T03:11:15Z",
            "content": "UPDATE (5/26 11:03pm): The National Weather Service has issued a Special Weather Statement for Davidson, Macon, Robertson, Smith, Sumner, Trousdale, and Wilson Counties.\r\n50 mph wind gusts and half i… [+1509 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters.com",
            "title": "Shares of China Evergrande's EV unit soar after liquidators' stake sale deal - Reuters.com",
            "description": null,
            "url": "https://www.reuters.com/markets/deals/shares-china-evergrandes-ev-unit-soar-after-liquidators-stake-sale-deal-2024-05-27/",
            "urlToImage": null,
            "publishedAt": "2024-05-27T03:01:25Z",
            "content": null
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Jeff Passan",
            "title": "Braves' Ronald Acuña Jr. out for season with torn left ACL - ESPN",
            "description": "Reigning NL MVP Ronald Acuña Jr. tore the ACL in his left knee Sunday and will miss the rest of the season, a significant blow to a Braves team that already lost ace Spencer Strider to Tommy John surgery.",
            "url": "https://www.espn.com/mlb/story/_/id/40226101/atlanta-braves-ronald-acuna-jr-season-torn-acl",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0526%2Fr1338003_1296x729_16%2D9.jpg",
            "publishedAt": "2024-05-27T02:33:46Z",
            "content": "Reigning National League MVP Ronald Acuña Jr. tore the ACL in his left knee Sunday and will miss the remainder of the season, a significant blow to an Atlanta Braves team that already lost ace Spence… [+3860 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Tornadoes and storms leave 15 dead across central US - BBC.com",
            "description": "Powerful storms devastate areas in Texas, Arkansas and Oklahoma and leave hundreds of thousands without power.",
            "url": "https://www.bbc.com/news/articles/cxxxp1w6e2ro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5994/live/0c97b8e0-1b9d-11ef-8c15-3791830f2b23.jpg",
            "publishedAt": "2024-05-27T02:19:35Z",
            "content": "Holly Honderich,in Washington\r\nA mobile home park in northern Texas smashed by the tornado\r\nAt least 15 people were killed as tornadoes and storms tore across central areas of the US, destroying home… [+4078 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Dublin passengers recall 'panic' as Doha plane hit turbulence - BBC.com",
            "description": "People from a Dublin-bound plane from Doha describe scenes on board during severe turbulence.",
            "url": "https://www.bbc.com/news/av/world-europe-69064916",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7570/production/_133346003_p0j0hm59.jpg",
            "publishedAt": "2024-05-27T02:17:34Z",
            "content": "Passengers who were on board a Dublin-bound flight which experienced severe turbulence have described seeing people 'hit the ceiling' when the aircraft dropped very suddenly.\r\nTwelve people was injur… [+234 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Reuters",
            "title": "Britain’s Prime Minister Rishi Sunak pitches national service at 18 - CNN",
            "description": "Britain’s Conservative Party will introduce mandatory national service for 18-year-olds, comprising military or community participation, if it wins the national election on July 4, the UK’s leader said on Sunday.",
            "url": "https://www.cnn.com/2024/05/26/europe/national-service-britain-uk-sunak-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-05-22t193536z-1410388031-rc2vv7a9nmdc-rtrmadp-3-britain-election.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-05-27T02:09:00Z",
            "content": "Britains Conservative Party will introduce mandatory national service for 18-year-olds if it wins the national election on July 4, comprising military or community participation, Prime Minister Rishi… [+1643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Trying to buy a house is 'playing a game you can't win' - BBC.com",
            "description": "The US housing market has changed dramatically since the pandemic - an issue looming over the election.",
            "url": "https://www.bbc.com/news/articles/cmj66r4lvzzo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1eaa/live/5c4b5060-147a-11ef-87f2-97663bbe6622.jpg",
            "publishedAt": "2024-05-27T01:50:06Z",
            "content": "Natalie Sherman,Business reporter, BBC News\r\nWhen Nathan Wilkins moved back in with his mother and sister in 2019, he hoped it would help him save money to buy a home. \r\nBut in the years since, the U… [+8184 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Associated Press",
            "title": "Davis Riley holds off Scottie Scheffler to win Charles Schwab Challenge as golf mourns Grayson Murray - New York Post ",
            "description": "The final round was played on the day that Grayson Murray’s parents said their 30-year-old son took his own life Saturday.",
            "url": "https://nypost.com/2024/05/26/sports/davis-riley-wins-at-colonial-as-pga-tour-mourns-grayson-murray/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/05/newspress-collage-zgpln9t5f-1716771007676.jpg?quality=75&strip=all&1716756676&w=1024",
            "publishedAt": "2024-05-27T00:58:00Z",
            "content": "FORT WORTH, Texas Davis Riley was practicing a week before Colonial when he got an unsettling call that his older sister had a seizure at work, which led to the discovery of a tumor on her brain and … [+5702 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Chris Gardner",
            "title": "Taylor Swift Performs in Portugal for First Time, Praises Crowds for Eras Tour Love During Emotional Speech: “Took My Breath Away” - Hollywood Reporter",
            "description": "The superstar singer performed in Portugal for the first time ever over the weekend at back-to-back, sold-out shows at Estádio da Luz on the European leg of her Eras Tour.",
            "url": "http://www.hollywoodreporter.com/news/music-news/taylor-swift-eras-tour-europe-lisbon-dates-1235909432/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/FotoJet-25.jpg?w=1024",
            "publishedAt": "2024-05-27T00:52:12Z",
            "content": "In a nearly two-decade career, Taylor Swift had never performed in Portugal… until this weekend. \r\nThe superstar singer brought The Eras Tour to Lisbon for two back-to-back, sold-out stops at Estádio… [+5402 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "Trump's longshot Libertarian nomination bid halted by party chair - Axios",
            "description": null,
            "url": "https://www.axios.com/2024/05/26/trump-libertarian-rfk-jr-ineligible-nominee",
            "urlToImage": null,
            "publishedAt": "2024-05-26T23:49:44Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Chris Willman",
            "title": "The Beach Boys and Director Frank Marshall on the Band’s Disney+ Doc: ‘We May Not Have Been Great Surfers, but We Sang About It Really Well’ - Variety",
            "description": "Mike Love and Al Jardine and director Frank Marshall talk about the Disney+ doc 'The Beach Boys' and subjects like their friendly Beatles rivalry.",
            "url": "https://variety.com/2024/music/news/beach-boys-documentary-interview-frank-marshall-1236016901/",
            "urlToImage": "https://variety.com/wp-content/uploads/2024/05/BB-full-AR5_7197_Rl0EIR87.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2024-05-26T23:43:00Z",
            "content": "If Memorial Day weekend is the unofficial start of summer on most Americans’ calendars, then it makes sense that the real tentpole kicking off tent season for a lot of people is not “Furiosa” or “Gar… [+15334 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Axios",
            "title": "Israeli airstrike kills dozens in Rafah tent camp, Gaza authorities say - Axios",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiQWh0dHBzOi8vd3d3LmF4aW9zLmNvbS8yMDI0LzA1LzI2L3JhZmFoLXRlbnQtY2FtcC1pc3JhZWwtYWlyc3RyaWtl0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-26T23:37:38Z",
            "content": null
        }
    ]

    constructor() {


        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {

        return (

            <div className='container my-3'>
                <h2>News</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (<div className="col-md-3" key={element.url}>
                            <NewsItem  title={(element.title== null)?element.title:element.title.slice(0,50)} description={(element.description== null)?element.description:element.description.slice(0,89)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>);
                    })}
                </div>
            </div>
        )
    }
}

export default News
