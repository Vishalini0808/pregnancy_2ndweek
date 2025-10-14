import React from 'react';
import { Link } from 'react-router-dom';
import './PregnancyYoga.css';

const YOGA_LIST = [
  {
    id: 'cat-cow',
    name: 'Cat-Cow Stretch',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&fit=crop',
    how: 'On hands and knees, inhale to arch (cow), exhale to round (cat). Move slowly with the breath.',
    when: 'Morning or anytime for back relief',
  },
  {
    id: 'side-lying',
    name: 'Side-Lying Stretch',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&fit=crop',
    how: 'Lie on your side with support between knees. Lengthen through the top arm and breathe softly.',
    when: 'Evening to unwind',
  },
  {
    id: 'seated-forward',
    name: 'Seated Forward Fold (Wide)',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&fit=crop',
    how: 'Sit with legs apart, hinge from hips with a long spine; rest hands on blocks for support.',
    when: 'Afternoon or after a light walk',
  },
  {
    id: 'butterfly',
    name: 'Butterfly Pose',
    image: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?w=800&fit=crop',
    how: 'Bring soles of feet together, knees open. Sit tall, breathe into the hips. Support knees if needed.',
    when: 'Anytime; helps hip mobility',
  },
];

export default function PregnancyYoga() {
  return (
    <div className="py-root">
      <header className="py-hero">
        <h1 className="py-title">🧘‍♀ Yoga & Exercises</h1>
        <p className="py-subtitle">Gentle, guided movements for pregnancy wellness</p>
        <Link to="/pregnancy-guide" className="py-back">← Back to Pregnancy Guide</Link>
      </header>
      <main className="py-content">
        <div className="py-grid">
          {YOGA_LIST.map((y) => (
            <article key={y.id} className="py-card">
              <div className="py-image-wrap">
                <img className="py-image" src={y.image} alt={y.name} />
              </div>
              <div className="py-body">
                <h3 className="py-name">{y.name}</h3>
                <p className="py-how">{y.how}</p>
                <div className="py-when">⏰ {y.when}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}