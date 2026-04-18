import {Link} from 'react-router';
import {ChevronRight, ChevronLeft} from 'lucide-react';

/**
 * Shared layout for course lesson pages.
 * Renders the Shopify CMS body content with course navigation.
 *
 * @param {{
 *   title: string;
 *   body: string;
 *   nextLesson?: { label: string; to: string };
 *   prevLesson?: { label: string; to: string };
 *   courseTitle: string;
 *   courseTo: string;
 *   videoEmbed?: string;
 * }} props
 */
export function CourseLesson({
  title,
  body,
  nextLesson,
  prevLesson,
  courseTitle,
  courseTo,
  videoEmbed,
}) {
  return (
    <div className="NormalSectionSize" style={{maxWidth: '860px', padding: '3rem 1.5rem 5rem'}}>
      <p style={{marginBottom: '0.5rem'}}>
        <Link
          to={courseTo}
          style={{fontSize: '0.9rem', opacity: 0.6, textDecoration: 'none'}}
        >
          <ChevronLeft size={14} style={{verticalAlign: 'middle'}} /> {courseTitle}
        </Link>
      </p>

      <h1 style={{marginBottom: '2rem'}}>{title}</h1>

      {videoEmbed && (
        <div className="YoutubeIframe" style={{marginBottom: '2rem'}}>
          <iframe
            src={videoEmbed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      <div
        className="course-lesson-body"
        dangerouslySetInnerHTML={{__html: body}}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: prevLesson ? 'space-between' : 'flex-end',
          alignItems: 'center',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(0,0,0,0.1)',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {prevLesson && (
          <Link
            to={prevLesson.to}
            prefetch="intent"
            className="btn--secondary"
            style={{
              maxWidth: '280px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            <ChevronLeft size={18} /> {prevLesson.label}
          </Link>
        )}
        {nextLesson && (
          <Link
            to={nextLesson.to}
            prefetch="intent"
            className="btn--primary"
            style={{
              maxWidth: '280px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            {nextLesson.label} <ChevronRight size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}
