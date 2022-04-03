import React from "react";
import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import { ContainerChoose, TextUnderImage } from "../../Styles";

const SecondSlide = observer(() => {
  return (
    <div>
      <ContainerChoose>
        <h2>You are looking for</h2>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel("gender", "5");
            Information.toNextSlide();
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABXCAYAAACa/2JvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVhSURBVHgB7Z2/TxxXEMe/8zgbpDSXvyDrLkXi4IKIuPH5LzDuHAsplyISccPyF4C7VPF1oKQwLiDugstUvlRGCgWI9L50KUFKIriDnbx3dzhwIXB7O7P73mU/0kmWzrLRZ2fer503EDyiHsfV9hHmAJomg3tgVAmosv3Yr1sgHDBTyyTcPCHee7nWaMIzCB7QFdk2i4Y57ssbFiuZmqdJ8sIXuYULrX8VT3cq9KP9Y4RstOxnZWP12QsUSO5CXTQeH6NGNp3ZpvAE6HnKqLwaovUbN5Ol9UbjAAWQq1DBaLyO1g3m++trjRZyJjehTuZJhV6LRuPVFCI1F6H1hTjqEL2GfmQO0roxyXfyTH+DHOiAVpC/TEfUPjbPkSMTUGZ+Ia7ZieIZCsKm4Icfzcwe/rqzvY0cUI9QJlpGwRjQsht2kAOqQrvRCdRQPNU2mVyyRFUog+rwBALPPeo9YFXUhHZTjPAFPMKQWYQyakLbfqT6BVyUup0aFFETSkReRecZdttbhyIqQvtRUIOH2Bn/ARRREXpyhGn4S00z7VWEJnCHxP5ypPjAVYTa8fMTeAxRYEItPqe8E6r2wLWE5nVENxLEFE6EPsppz5yRcCYlY/yOTm3khSZBCI2ghLjQpJiD5NRorUXFhVIYEerWomEI5XDG0AgKyAsNJOVNKEIN0QcIgwgKaCzsw0h5A5UHryE0QggkeB8KiArtL0WCiFCtAxxRoZ6fgw4SQQFRoZwEJVTl3EFW6IS5h4C4yfJpLyrUvlWMEBAdw7cgjJjQ/oQUVMprHDSLCT059vMt51XYg+YahBETmnB4Qi2R9MQkJtSu64KakM6waS/6hlZEaIjj5xnShQ8iQkMcP88hWvggIpSZhk4bAgq57nIVvdt7MsiMoYShx0/2UKhkYVtmoY8X4jrS7IsZPlKTKhnPLJRS1tAz+Dd4SFuo2jqT0PknS64iOEIqaBceYpdPixJROrJQdzOOGQ2khBJuwVM6BplvrIwstF0x7/5z7t0EHgr7VtS7SalP1emYy7iEGlno5uq3D3HKSwn4IQ2f9i2TQn7OHNgD3b2tjNcYM42hG981Gjbtd5n5Sxt714+N7KFM5iYliP+c5Fsbq43UQ9ggopdn3UGDfUI1Q3jQez9/sWzQin9lv29w7yJtEdgo5F0G7Rni5h+TaG4JX6xVv4382E5epmLlJvZ9PfFexaZ8d/DnrnDRMwDuDilWmOtNktChYbxNiA9xit2/3kNrK4dbyYW2yHCbAruOFbstbDPg6eZaYwUFksv17v8T4yVUqRok3Y9QLBHGjKKFylaZKJXXpKFQodLlMD68hilMaP8gogZZqp9/HRd6iy/XZZNrADDRO+6LzvW006DlPnZb/OoHgd1PGtSbuJzRl+nWnG4h70ROQQ/379uHRrO3Zz77fX9new85oR6h7gVY59idTHGMonDt25LkaR5NsdSEZui4qEcOYsWFeilyEEWxYkLPTTg1hEPTftYlW2RmEhpENA5HyzV2lYjakYQGGo3D0kSGqB1a6Fk0EnMdY7gHv4SRovZaoWOU1qOTYhL7T6Hdnp+uTaVn3cEKZQixl+6UXAFDAnppZc6i5DzTCVH88ad3sf/Lm58v+wv/Ejr/JF5mpm+guzUMGpvWtdszd6v7O29+GvzugtC+zBWUDMPsZZH6TqhbCtnDhHWUDI2L1MHuud1JqcCm02MBn/Cdze8b3UKP7gFzgU2nxwKq/NNjmvrR+RYlmThlvu9+H4nxsXFqiBj07hkYXxunhgYRutdzTK/GqESAyG3TbaSWQqVwvaDK2iZhSqHClEKFKYUKU+nVx5dIMDWFg78BiSDdpDk9TtwAAAAASUVORK5CYII=" />
          <p>Women's Styles</p>
        </TextUnderImage>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel("gender", "4");
            Information.toNextSlide();
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsCAYAAADxRjE/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALSSURBVHgB1ZnPblJBFMa/M7dUlvUNcG1UTGpSV8UnEBcmmjaRjUlx49UXKLxAuW4KOzBRZKc+gdcdJl1gdO99A3HRiBd6xzNWTbWSMmdGaH9J0zTlz8fwzZxzviF4pBKGK+kIZVJqHVqXCFjJQHG3uXMLHiF44Pb9sJjLqZtK61Cz0OPvQp1cltU7rSiBBwI4svkg3A4U9fjTl/jP/JSHFTOi8uVr14cf9vrv4Yh4pY0VRiMUA6I3Ns/TRLXu7k4dDohE362G5QDU/qcVZuBA6xu9VhRDiIIABWpIBRv422mbbwpCrEVv8irzrwLcKKQjCiHEWnQ2QQIPEGEdQuztEaAMP5SkFrEWrd2t8Zv9fdlriTaiL3IBihBgLZrPyCEWjL3ozM9GdMHe00uI4YkMsgWwFt3djQbwZJF8HgMIsBa9UX3cgEM1PMr4G72EAMHpoUU7fgoFCBCc0+Tv9NBz8rTS2RP4gtCBAFFrulF99BmOvubKmnSbjQsQIKqIpLXzahPpGEJEopfyiDTkRcY89yCDeHoRzYiDfn90aXXtC/HcBwHsyfBFK3oLIeKGaTmPVxAWGR63xIINYtGdKBqKvE2603OMEpxa02etqAZL0jGcN7GTaMnkEQTufYuTaM49vPQgtjiJVspe9LKmK3BELNpYg7S6B0smiioumYdBLDpNTYemrbMLgi5nX0kcHxjk9sggblEnhKtwQFQRK1thgVPQNoRNEwc1xYura+8+7vUTCLDq8u5shSXO4bZxGOv6IObqWLcNI2cS/R/E/k3CP7XnzcbTWR48VfSPq4hUPeRSXYHHVOkEEvZOfNKtwTHRc1jV2SCe1DWi3Dn92vQ5f/7rJyYo59zZiPU5uPog4duDztHbAzInwfjwJCjhdJPk+AbB2EaNQTWcfsGGX4sL4iH1E+a30Zxhj583FbGAM4TpLBeaT0tZ4ookyh4WhRnVvgNZNOQU5rTc+AAAAABJRU5ErkJggg==" />
          <p>Men's Style</p>
        </TextUnderImage>
        <h3
          onClick={() => {
            Information.toNextSlide();
          }}
        >
          I'd like to see both
        </h3>
      </ContainerChoose>
    </div>
  );
});

export default SecondSlide;
