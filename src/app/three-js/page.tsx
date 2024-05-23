import dynamic from 'next/dynamic'
 
// Server Component:
const Scene = dynamic(() => import('@/components/ThreeJS/Scene'),{
  ssr: false
})
 
const page = () => {
  return (
    <section className="h-screen">

      <h3>three js</h3>
      <Scene/>
    </section>
  );
};

export default page;
