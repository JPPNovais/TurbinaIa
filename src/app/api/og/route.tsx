import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Turbina IA';
  const desc = searchParams.get('desc') ?? 'O Portal Definitivo de Inteligência Artificial';
  const badge = searchParams.get('badge') ?? 'Ferramenta';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1040 50%, #0f0f1a 100%)',
          padding: '60px 70px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '48px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontSize: '32px',
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              🌀
            </div>
            <span
              style={{
                fontSize: '26px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              Turbina IA
            </span>
          </div>

          {/* Badge */}
          <div
            style={{
              background: 'rgba(139,92,246,0.2)',
              border: '1px solid rgba(139,92,246,0.4)',
              borderRadius: '999px',
              padding: '8px 20px',
              color: '#a78bfa',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            {badge}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: title.length > 40 ? '44px' : '54px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.5,
              maxWidth: '820px',
            }}
          >
            {desc}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            marginTop: '24px',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>
            turbinaia.com.br
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['ChatGPT', 'Claude', 'Gemini'].map((label) => (
              <span
                key={label}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '6px',
                  padding: '4px 12px',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '14px',
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
