'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { matches } from '../data/teamData';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const nextMatch = matches.find(m => m.status === 'upcoming');

  // Countdown Timer State
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Next Match Details
  const nextMatchDetails = {
    opponent: "Thunder FC",
    opponentLogo: "/images/logo/logo-lawan.svg",
    date: "2025-11-15T19:00:00",
    stadium: "Jakarta International Stadium",
    location: "Jakarta, Indonesia",
    mapsUrl: "https://www.google.com/maps/place/Jakarta+International+Stadium"
  };

  useEffect(() => {
    const calculateCountdown = () => {
      const matchDate = new Date(nextMatchDetails.date).getTime();
      const now = new Date().getTime();
      const distance = matchDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [nextMatchDetails.date]);

  return (
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Navbar />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroImage}>
            <img src="/images/gallery/players-card.jpg" alt="Fireflies FC Team" />
          </div>

          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                A Fun Football<br />
                Community Based<br />
                in Jakarta
              </h1>
              <p className={styles.heroSubtitle}>
                Join our passionate community of football enthusiasts. Play, compete, and build lasting friendships on the pitch.
              </p>
              <div className={styles.statsBar}>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className={styles.statInfo}>
                    <div className={styles.statNumber}>28</div>
                    <div className={styles.statLabel}>Active Players</div>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className={styles.statInfo}>
                    <div className={styles.statNumber}>156</div>
                    <div className={styles.statLabel}>Matches Played</div>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <div className={styles.statInfo}>
                    <div className={styles.statNumber}>7</div>
                    <div className={styles.statLabel}>Trophies Won</div>
                  </div>
                </div>
              </div>
              <Link href="/contact" className={styles.joinButton}>
                <span>Join Our Team</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Match Schedule Carousel */}
            <div className={styles.matchCarousel}>
              <div className={styles.carouselTrack}>
                {/* Match Card 1 */}
                <div className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <span className={styles.matchBadge}>This Week</span>
                  </div>
                  <div className={styles.matchVersus}>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo.svg" alt="Fireflies FC" />
                    </div>
                    <div className={styles.matchVsText}>VS</div>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo-lawan.svg" alt="Opponent" />
                    </div>
                  </div>
                  <div className={styles.matchInfo}>
                    <div className={styles.matchType}>Minisoccer - Sparing</div>
                    <div className={styles.matchVenue}>Nou Camp</div>
                  </div>
                </div>

                {/* Match Card 2 */}
                <div className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <span className={styles.matchBadge}>Next Week</span>
                  </div>
                  <div className={styles.matchVersus}>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo.svg" alt="Fireflies FC" />
                    </div>
                    <div className={styles.matchVsText}>VS</div>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo-lawan.svg" alt="Opponent" />
                    </div>
                  </div>
                  <div className={styles.matchInfo}>
                    <div className={styles.matchType}>Futsal - Tournament</div>
                    <div className={styles.matchVenue}>Indoor Arena</div>
                  </div>
                </div>

                {/* Match Card 3 */}
                <div className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <span className={styles.matchBadge}>Upcoming</span>
                  </div>
                  <div className={styles.matchVersus}>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo.svg" alt="Fireflies FC" />
                    </div>
                    <div className={styles.matchVsText}>VS</div>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo-lawan.svg" alt="Opponent" />
                    </div>
                  </div>
                  <div className={styles.matchInfo}>
                    <div className={styles.matchType}>11v11 - Friendly</div>
                    <div className={styles.matchVenue}>Jakarta Stadium</div>
                  </div>
                </div>

                {/* Duplicate cards for seamless loop */}
                <div className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <span className={styles.matchBadge}>This Week</span>
                  </div>
                  <div className={styles.matchVersus}>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo.svg" alt="Fireflies FC" />
                    </div>
                    <div className={styles.matchVsText}>VS</div>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo-lawan.svg" alt="Opponent" />
                    </div>
                  </div>
                  <div className={styles.matchInfo}>
                    <div className={styles.matchType}>Minisoccer - Sparing</div>
                    <div className={styles.matchVenue}>Nou Camp</div>
                  </div>
                </div>

                <div className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <span className={styles.matchBadge}>Next Week</span>
                  </div>
                  <div className={styles.matchVersus}>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo.svg" alt="Fireflies FC" />
                    </div>
                    <div className={styles.matchVsText}>VS</div>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo-lawan.svg" alt="Opponent" />
                    </div>
                  </div>
                  <div className={styles.matchInfo}>
                    <div className={styles.matchType}>Futsal - Tournament</div>
                    <div className={styles.matchVenue}>Indoor Arena</div>
                  </div>
                </div>

                <div className={styles.matchCard}>
                  <div className={styles.matchCardHeader}>
                    <span className={styles.matchBadge}>Upcoming</span>
                  </div>
                  <div className={styles.matchVersus}>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo.svg" alt="Fireflies FC" />
                    </div>
                    <div className={styles.matchVsText}>VS</div>
                    <div className={styles.matchTeamLogo}>
                      <img src="/images/logo/logo-lawan.svg" alt="Opponent" />
                    </div>
                  </div>
                  <div className={styles.matchInfo}>
                    <div className={styles.matchType}>11v11 - Friendly</div>
                    <div className={styles.matchVenue}>Jakarta Stadium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <div className={styles.partnersContainer}>
            <h2 className={styles.partnersTitle}>Our Partners</h2>
            <p className={styles.partnersSubtitle}>Trusted brands that support Fireflies FC</p>

            <div className={styles.partnersCarousel}>
              <div className={styles.partnersTrack}>
                <div className={styles.partnerCard}>
                  <img src="/images/sponsors/balladabola.png" alt="Balladabola" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/adidas.png" alt="Adidas" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/puma.png" alt="Puma" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/under-armour.png" alt="Under Armour" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/new-balance.png" alt="New Balance" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/mizuno.png" alt="Mizuno" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/umbro.png" alt="Umbro" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/kappa.png" alt="Kappa" className={styles.partnerLogo} />
                </div>

                {/* Duplicate for seamless loop */}
                <div className={styles.partnerCard}>
                  <img src="/images/sponsors/balladabola.png" alt="Balladabola" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/adidas.png" alt="Adidas" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/puma.png" alt="Puma" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/under-armour.png" alt="Under Armour" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/new-balance.png" alt="New Balance" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/mizuno.png" alt="Mizuno" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/umbro.png" alt="Umbro" className={styles.partnerLogo} />
                </div>
                <div className={styles.partnerCard}>
                  <img src="/images/partners/kappa.png" alt="Kappa" className={styles.partnerLogo} />
                </div>
              </div>
            </div>

            {/* Partners Carousel Dots */}
            <div className={styles.partnersCarouselDots}>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
              <div className={styles.carouselDot}></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h2 className={styles.sectionTitle}>Why Join Fireflies FC?</h2>
              <p className={styles.sectionSubtitle}>Experience the best football community in Jakarta</p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Regular Matches</h3>
                <p className={styles.featureDescription}>
                  Play competitive matches every two weeks across futsal, mini soccer, and 11v11 formats.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Strong Community</h3>
                <p className={styles.featureDescription}>
                  Build lasting friendships with 28+ active players who share your passion for football.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Skill Development</h3>
                <p className={styles.featureDescription}>
                  Improve your game through regular training sessions and competitive tournament play.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Trophy Cabinet</h3>
                <p className={styles.featureDescription}>
                  Compete for glory with 7 tournament victories already in our collection.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Premium Facilities</h3>
                <p className={styles.featureDescription}>
                  Access top-quality football facilities across Jakarta's premier venues.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>All Skill Levels</h3>
                <p className={styles.featureDescription}>
                  Welcome players of all abilities in a supportive, fun environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section className={styles.exploreSection}>
          <div className={styles.exploreContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h2 className={styles.sectionTitle}>Explore Fireflies FC</h2>
              <p className={styles.sectionSubtitle}>Discover what makes us Jakarta's premier football community</p>
            </div>

            <div className={styles.exploreGrid}>
              <Link href="/players" className={styles.exploreCard}>
                <div className={styles.exploreCardImage}>
                  <img src="/images/gallery/players-card.jpg" alt="Football Players" />
                  <div className={styles.exploreCardOverlay}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className={styles.exploreCardContent}>
                  <h3 className={styles.exploreCardTitle}>Our Players</h3>
                  <p className={styles.exploreCardDescription}>
                    Meet our talented roster of 28+ dedicated athletes who bring passion to every game.
                  </p>
                  <div className={styles.exploreCardButton}>
                    <span>Meet the Team</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/matches" className={styles.exploreCard}>
                <div className={styles.exploreCardImage}>
                  <img src="/images/gallery/matches-card.jpg" alt="Football Match" />
                  <div className={styles.exploreCardOverlay}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                </div>
                <div className={styles.exploreCardContent}>
                  <h3 className={styles.exploreCardTitle}>Our Matches</h3>
                  <p className={styles.exploreCardDescription}>
                    Follow our journey through 156+ exciting matches and competitive tournaments.
                  </p>
                  <div className={styles.exploreCardButton}>
                    <span>View Schedule</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/gallery" className={styles.exploreCard}>
                <div className={styles.exploreCardImage}>
                  <img src="/images/gallery/kits-card.jpg" alt="Football Gallery" />
                  <div className={styles.exploreCardOverlay}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>
                <div className={styles.exploreCardContent}>
                  <h3 className={styles.exploreCardTitle}>Photo Gallery</h3>
                  <p className={styles.exploreCardDescription}>
                    Relive unforgettable moments captured throughout our football journey.
                  </p>
                  <div className={styles.exploreCardButton}>
                    <span>View Gallery</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/about" className={styles.exploreCard}>
                <div className={styles.exploreCardImage}>
                  <img src="/images/gallery/trophy-card.jpg" alt="Football Trophy" />
                  <div className={styles.exploreCardOverlay}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                </div>
                <div className={styles.exploreCardContent}>
                  <h3 className={styles.exploreCardTitle}>Our Story</h3>
                  <p className={styles.exploreCardDescription}>
                    Celebrate our achievements and 7 tournament victories throughout the years.
                  </p>
                  <div className={styles.exploreCardButton}>
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Next Match Section */}
        <section className={styles.nextMatchSection}>
          <div className={styles.nextMatchContainer}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h2 className={styles.sectionTitle}>Next Match</h2>
              <p className={styles.sectionSubtitle}>Get ready for our upcoming battle</p>
            </div>

            <div className={styles.matchupCard}>
              <div className={styles.teamsMatchup}>
                <div className={styles.teamSection}>
                  <div className={styles.teamLogoWrapper}>
                    <img src="/images/logo/logo.svg" alt="Fireflies FC" className={styles.teamLogo} />
                  </div>
                  <h3 className={styles.teamName}>Fireflies FC</h3>
                  <p className={styles.teamDescription}>
                    Jakarta's premier football club with dynamic attacking style
                  </p>
                </div>

                <div className={styles.vsCircle}>
                  <span>VS</span>
                </div>

                <div className={styles.teamSection}>
                  <div className={styles.teamLogoWrapper}>
                    <img src={nextMatchDetails.opponentLogo} alt={nextMatchDetails.opponent} className={styles.teamLogo} />
                  </div>
                  <h3 className={styles.teamName}>{nextMatchDetails.opponent}</h3>
                  <p className={styles.teamDescription}>
                    Strong defensive record and experienced roster
                  </p>
                </div>
              </div>

              <div className={styles.matchDetails}>
                <div className={styles.matchDetailItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{new Date(nextMatchDetails.date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className={styles.matchDetailItem}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{nextMatchDetails.stadium}</span>
                </div>
              </div>

              <div className={styles.countdownWrapper}>
                <h3 className={styles.countdownTitle}>Match starts in</h3>
                <div className={styles.countdown}>
                  <div className={styles.countdownItem}>
                    <div className={styles.countdownValue}>{String(countdown.days).padStart(2, '0')}</div>
                    <div className={styles.countdownLabel}>Days</div>
                  </div>
                  <div className={styles.countdownSeparator}>:</div>
                  <div className={styles.countdownItem}>
                    <div className={styles.countdownValue}>{String(countdown.hours).padStart(2, '0')}</div>
                    <div className={styles.countdownLabel}>Hours</div>
                  </div>
                  <div className={styles.countdownSeparator}>:</div>
                  <div className={styles.countdownItem}>
                    <div className={styles.countdownValue}>{String(countdown.minutes).padStart(2, '0')}</div>
                    <div className={styles.countdownLabel}>Minutes</div>
                  </div>
                  <div className={styles.countdownSeparator}>:</div>
                  <div className={styles.countdownItem}>
                    <div className={styles.countdownValue}>{String(countdown.seconds).padStart(2, '0')}</div>
                    <div className={styles.countdownLabel}>Seconds</div>
                  </div>
                </div>
              </div>

              <a href={nextMatchDetails.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.viewLocationButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>View on Map</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}