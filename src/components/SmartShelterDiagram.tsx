export default function SmartShelterDiagram() {
  return (
    <svg viewBox="0 0 720 260" className="shelter-diagram" role="img" aria-label="Smart Shelter system architecture: sensors feed into Arduino Uno R4 WiFi, which drives clothesline and parcel actuators">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--text-muted)" />
        </marker>
      </defs>

      {/* Sensors (left column) */}
      <g>
        <rect x="10" y="20" width="160" height="48" rx="10" className="shelter-diagram__box shelter-diagram__box--sensor" />
        <text x="90" y="49" textAnchor="middle" className="shelter-diagram__text">Rain Sensor</text>

        <rect x="10" y="100" width="160" height="48" rx="10" className="shelter-diagram__box shelter-diagram__box--sensor" />
        <text x="90" y="122" textAnchor="middle" className="shelter-diagram__text">IR Sensor</text>
        <text x="90" y="138" textAnchor="middle" className="shelter-diagram__text">+ Ultrasonic Sensor</text>
      </g>

      {/* Arduino (center) */}
      <rect x="280" y="60" width="180" height="90" rx="12" className="shelter-diagram__box shelter-diagram__box--core" />
      <text x="370" y="98" textAnchor="middle" className="shelter-diagram__text shelter-diagram__text--core">Arduino Uno R4 WiFi</text>
      <text x="370" y="118" textAnchor="middle" className="shelter-diagram__text shelter-diagram__text--core">+ Blynk IoT</text>

      {/* Actuators (right column) */}
      <g>
        <rect x="550" y="20" width="160" height="48" rx="10" className="shelter-diagram__box shelter-diagram__box--actuator" />
        <text x="630" y="49" textAnchor="middle" className="shelter-diagram__text">Servo: rotate clothesline</text>

        <rect x="550" y="100" width="160" height="48" rx="10" className="shelter-diagram__box shelter-diagram__box--actuator" />
        <text x="630" y="122" textAnchor="middle" className="shelter-diagram__text">Pulley system:</text>
        <text x="630" y="138" textAnchor="middle" className="shelter-diagram__text">parcel box</text>
      </g>

      {/* Connectors */}
      <line x1="170" y1="44" x2="280" y2="90" className="shelter-diagram__line" markerEnd="url(#arrow)" />
      <line x1="170" y1="124" x2="280" y2="120" className="shelter-diagram__line" markerEnd="url(#arrow)" />
      <line x1="460" y1="90" x2="550" y2="44" className="shelter-diagram__line" markerEnd="url(#arrow)" />
      <line x1="460" y1="120" x2="550" y2="124" className="shelter-diagram__line" markerEnd="url(#arrow)" />

      {/* Decision captions — centered on the full diagram width so the
          longer strings don't clip past the viewBox edges */}
      <text x="360" y="185" textAnchor="middle" className="shelter-diagram__caption">Rain detected -&gt; rotate clothesline 90&deg; under roof</text>
      <text x="360" y="205" textAnchor="middle" className="shelter-diagram__caption">Parcel detected -&gt; pulley pulls box under shelter</text>
    </svg>
  )
}
