import * as React from "react"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import myPDF from "./resume.pdf"

import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
      <div
        style={{
          height: "100%",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Viewer fileUrl={myPDF} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  )
}

export default Resume
