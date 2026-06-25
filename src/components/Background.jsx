import './Background.css'

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__grid" />
      <div className="bg__orb bg__orb--1" />
      <div className="bg__orb bg__orb--2" />
      <div className="bg__orb bg__orb--3" />
    </div>
  )
}
