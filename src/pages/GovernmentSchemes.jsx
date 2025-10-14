import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './GovernmentSchemes.css';

const DEMO_SCHEMES = [
  {
    id: 'pm-mvy',
    title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    description: 'Financial assistance to pregnant and lactating women for nutrition and rest.',
    eligibility: 'Expecting mothers and new moms meeting scheme criteria; first living child focus.',
    link: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana',
    icon: '🍼',
  },
  {
    id: 'jsy',
    title: 'Janani Suraksha Yojana (JSY)',
    description: 'Incentivizes institutional delivery to reduce maternal and neonatal mortality.',
    eligibility: 'Pregnant women, especially from low-income households; terms vary by state.',
    link: 'https://nhm.gov.in/index4.php?lang=1&level=0&linkid=362&lid=115',
    icon: '💗',
  },
  {
    id: 'poshan',
    title: 'POSHAN Abhiyaan',
    description: 'National Nutrition Mission focusing on maternal and child nutrition outcomes.',
    eligibility: 'Mothers and infants; implemented via Anganwadi services and allied programs.',
    link: 'https://www.poshanabhiyaan.gov.in/',
    icon: '🍎',
  },
  {
    id: 'immunization',
    title: 'Universal Immunization Programme (UIP)',
    description: 'Free vaccination for children and pregnant women against vaccine-preventable diseases.',
    eligibility: 'All infants, children, and pregnant women as per national schedule.',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=824&lid=220',
    icon: '💉',
  },
  
  {
    id: 'jsy',
    title: 'Janani Suraksha Yojana (JSY)',
    description: 'Incentivizes institutional delivery to reduce maternal and neonatal mortality.',
    eligibility: 'Pregnant women, especially from low-income households; terms vary by state.',
    link: 'https://nhm.gov.in/index4.php?lang=1&level=0&linkid=362&lid=115',
    icon: '💗',
  },
  {
    id: 'pmmvy',
    title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    description: 'Provides cash incentive to pregnant and lactating women to promote health, nutrition, and compensate wage loss.',
    eligibility: 'Women aged 19 years and above for first live birth; must register pregnancy and attend antenatal care.',
    link: 'https://wcdhry.gov.in/schemes-for-women/pradhan-mantri-matru-vandhana-yojna/',
    icon: '👶',
  },
  {
    id: 'jssk',
    title: 'Janani Shishu Suraksha Karyakram (JSSK)',
    description: 'Ensures free delivery, including cesarean section, drugs, diagnostics, blood, diet, and transport for mothers and newborns.',
    eligibility: 'All pregnant women and sick newborns accessing government health institutions.',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=3&lid=308&sublinkid=842',
    icon: '🏥',
  },
  {
    id: 'pmsma',
    title: 'Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)',
    description: 'Provides assured, comprehensive, and quality antenatal care on the 9th of every month for all pregnant women.',
    eligibility: 'All pregnant women visiting designated public or private facilities on the 9th day of every month.',
    link: 'https://pmsma.mohfw.gov.in/',
    icon: '🩺',
  },
  {
    id: 'suman',
    title: 'Surakshit Matritva Aashwasan (SUMAN)',
    description: 'Guarantees free, dignified, respectful maternal and newborn healthcare services at public facilities.',
    eligibility: 'All women and newborns accessing public health institutions.',
    link: 'https://www.myscheme.gov.in/schemes/suman',
    icon: '🤱',
  },
  {
    id: 'igmsy',
    title: 'Indira Gandhi Matritva Sahyog Yojana (IGMSY)',
    description: 'Offers partial wage compensation to pregnant and lactating mothers to encourage health and breastfeeding practices.',
    eligibility: 'Women aged 19 years and above, for first two live births (conditions apply).',
    link: 'https://chhindwara.nic.in/en/scheme/indira-gandhi-maternity-support-scheme-i-g-m-s-y/',
    icon: '🧾',
  },
  {
    id: 'dmrmbs',
    title: 'Dr. Muthulakshmi Reddy Maternity Benefit Scheme (Tamil Nadu)',
    description: 'State-level maternity benefit providing cash assistance in multiple instalments for better maternal and child health.',
    eligibility: 'Pregnant women residing in Tamil Nadu, subject to state-specific criteria.',
    link: 'https://www.nivabupa.com/govt-scheme-articles/government-schemes-for-pregnant-ladies-tamil-nadu.html',
    icon: '🏙️',
  },
  {
    id: 'icds',
    title: 'Integrated Child Development Services (ICDS)',
    description: 'Provides supplementary nutrition, health check-ups, immunization, and preschool education for children under 6 years and mothers.',
    eligibility: 'Children under 6 years, pregnant women, and lactating mothers across India.',
    link: 'https://icds-wcd.nic.in/',
    icon: '🧸',
  },
  {
    id: 'rksk',
    title: 'Rashtriya Kishor Swasthya Karyakram (RKSK)',
    description: 'Focuses on adolescent health through nutrition, mental health, substance abuse prevention, and reproductive health education.',
    eligibility: 'Adolescents aged 10–19 years, both girls and boys.',
    link: 'https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=818&lid=221',
    icon: '🌱',
  },


];

export default function GovernmentSchemes() {
  const [schemes, setSchemes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      try {
        // Example placeholder for future API wiring (e.g., data.gov.in / mygov.in)
        // const res = await fetch('https://api.example.gov/schemes?category=maternal');
        // if (!res.ok) throw new Error('Network error');
        // const json = await res.json();
        // const fromApi = transformApi(json);
        // if (!cancelled) setSchemes(fromApi);
        await new Promise((r) => setTimeout(r, 400));
        if (!cancelled) setSchemes(DEMO_SCHEMES);
      } catch (e) {
        if (!cancelled) {
          setError('Could not fetch live schemes. Showing demo list.',e);
          setSchemes(DEMO_SCHEMES);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return schemes;
    return schemes.filter((s) => (
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.eligibility.toLowerCase().includes(q)
    ));
  }, [schemes, query]);

  return (
    <div className="gs-root">
      <div className='gs-head'>
      <header className="gs-header">
        <h1 className="gs-title">👩‍🍼 Government Schemes for Pregnant Women & New Moms</h1>
        <p className="gs-subtitle">Explore trusted programs supporting pregnancy care, wellness, and early development.</p>
        <div className="gs-actions">
          <input
            className="gs-search"
            type="search"
            placeholder="Search (e.g., nutrition, vaccination, baby)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to="/" className="gs-back">← Back</Link>
        </div>
        {error && <div className="gs-note">{error}</div>}
      </header>
      </div>

      <main className="gs-list">
        {loading && <div className="gs-loading">Loading schemes…</div>}
        {!loading && filtered.map((s) => (
          <article key={s.id} className="gs-card">
            <div className="gs-card-icon" aria-hidden>{s.icon}</div>
            <div className="gs-card-body">
              <h2 className="gs-card-title">{s.title}</h2>
              <p className="gs-card-desc">{s.description}</p>
              <p className="gs-card-eligibility"><strong>Eligibility:</strong> {s.eligibility}</p>
              <a className="gs-link" href={s.link} target="_blank" rel="noreferrer">Official Information →</a>
            </div>
          </article>
        ))}
        {!loading && filtered.length === 0 && (
          <div className="gs-empty">No schemes matched “{query}”. Try another keyword.</div>
        )}
      </main>
    </div>
  );
}