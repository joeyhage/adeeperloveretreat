import React from 'react';
import { Helmet } from 'react-helmet';

export default class Events extends React.Component {

	render() {
		return (
			<div id='about-page' className='has-background-white'>
				<Helmet>
					<title>About - A Deeper Love Marriage Retreat</title>
				</Helmet>
        <h1 className='title has-text-centered is-size-1-desktop is-size-3-touch'>About the Retreat</h1>
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-12'>
              <div className='tile'>
                <div className='tile is-parent is-vertical is-8'>
                  <article className='tile is-child notification' style={{backgroundColor:'hsl(324,7%,41%)'}}>
                    <p className='heading is-uppercase is-size-4 has-text-weight-bold'>Why plan a marriage retreat?</p>
                    <p className='subtitle'>After I had my 4th son, I received shocking news that my brother
                      was getting a divorce after 9 years of marriage. It hit me hard. I prayed about it frequently and
                      one afternoon God made me look in the mirror and told me to ask myself, how is <i>your</i> marriage?
                      Due to the tired, emotional, and life-draining nature of parenthood, I couldn't answer him in the way
                      I wanted to. I loved Jon, but life was so busy and we didn’t make time for each other. God
                      placed it on my heart to plan a marriage retreat. I planned the retreat in two months and seven couples came.
                      Afterwards, I felt God tugging on my heart to plan another. I reached out to friends to help with babysitting,
                      tech work, and photography. After four days of open registration, we were sold out and had 25 couples signed
                      up! It was so amazing to see God touch so many couples’ hearts!</p>
                  </article>
                  <article className='tile is-child notification' style={{ backgroundColor: 'hsl(324,7%,46%)' }}>
                    <p className='heading is-uppercase is-size-4 has-text-weight-bold'>Location</p>
                    <p className='subtitle'>This year our third annual marriage retreat will be held at our farm, Weber
                      Farm.
                      Why you ask? Well after having the retreat last August in Ames at St. Thomas, I realized it didn’t
                      give
                      the retreat feeling I was wanting. I wanted couples to come and feel calm, energized, and not
                      worry about
                      children or the fast paced world! I wanted couples to come see the sunset, walk on the gravel
                      roads, or
                      play games without children interrupting them. I wanted to have them enjoy meals with their spouse
                      and
                      other like-minded adults! I wanted a retreat to focus on marriage and the gifts within the beauty
                      God
                      has given us all. Due to the new venue and wanting to maintain the peacefulness of the farm, we
                      will
                      not have babysitting provided this year. However, if you need assistance in finding a reliable
                      sitter
                      you may contact us for suggestions.</p>
                  </article>
                  <article className='tile is-child notification' style={{backgroundColor:'hsl(324,7%,51%)'}}>
                    <p className='heading is-uppercase is-size-4 has-text-weight-bold'>Why is this retreat different?</p>
                    <p className='subtitle'>There are no small groups. You don’t have to share your struggles of your marriage with
                      anyone but your spouse! You can expect confession, mass, and realistic speakers that discuss real-life
                      marriages, not the perfect marriages portrayed on social media. We will have an opportunity for a date lunch
                      with just your spouse and a group date with all of the couples. This year we have a whole team of people
                      volunteering their time. From musicians to decorators we have a team working to make this retreat better
                      than the ones before.</p>
                  </article>
                  <article className='tile is-child notification' style={{backgroundColor:'hsl(324,7%,56%)'}}>
                    <p className='heading is-uppercase is-size-4 has-text-weight-bold'>Dreams do Come true</p>
                    <p className='subtitle'>Before Jon and I had children, we had dreams of having a retreat
                      center on our property so we could have our high school youth group come and do retreats out here. Then we
                      had children and with the busyness of life we didn’t think about it again until Jon built a new building
                      for all his work equipment. Then we felt God reminding us of our dream. Now, ten years later, the teens
                      we once wanted this retreat center for, are now married and having kids. Isn't it funny how God works?</p>
                  </article>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child notification is-verticle' style={{backgroundColor:'#D5D5D5'}}>
                    <p className='title has-text-centered is-bold is-uppercase' style={{color:'#6e5f68'}}>
                      About Christina
                    </p>
                    <figure className='image is-square' style={{marginBottom:'5vh'}}>
                      <img src='https://cdn.glitch.com/b8ab5d72-f094-4be6-b779-eb4ed16e6d67%2FWeberFam.jpg?1546985122853'
                           alt='WeberFam' style={{borderRadius:'10px'}} />
                    </figure>
                    <p >
                      Hi, I'm Christina Weber! I'm married to Jonathan Weber. Together we have four boys #boymom and call a three acre farm, "home"
                      #weberfarm. Jon has remodeled every room in our 1800’s farmhouse. We have a huge garden that our parents help maintain, 15 chickens, three dogs,
                      and three cats. Every boy’s dream come true: from dirt to sand and rocks! But when it comes down to it, we really love our little slice of heaven
                      on earth because of the pure quietness and peace away from the noisy world.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
			</div>

		);
	}
}