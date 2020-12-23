import Link from 'next/link'


const About = () => {
  return (
    <div style={style}>
      <h1>About</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  )
}

const style = {
  fontSize: "20px",
  color: "blue"
}

export default About
