import Footer from "./components/Footer";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const Photo1 =
    "https://cdn.usegalileo.ai/sdxl10/93c53328-0c62-432e-958c-29762efe6b12.png";
  const Photo2 =
    "https://cdn.usegalileo.ai/sdxl10/f1b00740-066b-4b43-99cd-c2f0e7573d3a.png";
  const Photo3 =
    "https://cdn.usegalileo.ai/sdxl10/5dc9a79d-0d8b-427e-b0f9-1ac5a161d9f1.png";
  const Photo4 =
    "https://cdn.usegalileo.ai/sdxl10/17779458-f3f3-456d-a95f-1e9cf4ef2bc0.png";
  const Photo5 =
    "https://cdn.usegalileo.ai/sdxl10/72baa256-6574-4740-9f1d-954e6762952f.png";
  const Photo6 =
    "https://cdn.usegalileo.ai/sdxl10/3b6d5d80-f655-46c2-9fd7-67822da4a569.png";
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", "sans-serif"' }}
      >
        <div className="layout-container flex h-full grow flex-col">

          <Nav />
          <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 w-[96%] mx-auto"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/2baecd5e-edba-4ae2-9ebe-d6149af7d2f7.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Hi, I'm Felix
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      I'm a developer, writer and creator. I build apps and
                      write about tech, business and design.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                <Card
                  address={Photo1}
                  title="Milkshake"
                  text="Create beautiful, responsive websites right in your browser"
                />
                <Card
                  address={Photo2}
                  title="Doodle"
                  text=" The simplest way to turn your ideas into beautiful
                      illustrations"
                />

                <Card
                  address={Photo3}
                  title={"Doodle for Slack"}
                  text={
                    "Turn any message or reaction in Slack into a doodle in seconds"
                  }
                />

                <Card
                  address={Photo4}
                  title={"Resume"}
                  text={
                    "Create a professional resume in minutes using our free, online resume builder"
                  }
                />
                <Card
                  address={Photo5}
                  title={"Lunch Money"}
                  text={"The modern personal finance app"}
                />
                <Card
                  address={Photo6}
                  title={"Pencil"}
                  text={
                    "Turn any message or reaction in Slack into a doodle in seconds"
                  }
                />
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
