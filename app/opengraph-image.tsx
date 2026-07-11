import { ImageResponse } from "next/og";

export const alt = "ADYNTIQ AI Consulting";
export const size = {
    width: 1200,
    height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    padding: "72px",
                    color: "#ffffff",
                    background:
                        "linear-gradient(135deg, #07172f 0%, #0b2545 55%, #0f3d46 100%)"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        right: "-100px",
                        top: "-120px",
                        width: "460px",
                        height: "460px",
                        borderRadius: "50%",
                        background: "rgba(37, 99, 235, 0.24)",
                        display: "flex"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        right: "80px",
                        bottom: "-170px",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "rgba(34, 197, 94, 0.18)",
                        display: "flex"
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "22px",
                        zIndex: 2
                    }}
                >
                    <div
                        style={{
                            width: "82px",
                            height: "82px",
                            borderRadius: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                                "linear-gradient(135deg, #2563EB 0%, #22C55E 100%)",
                            fontSize: "48px",
                            fontWeight: 800
                        }}
                    >
                        A
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "54px",
                            fontWeight: 800,
                            letterSpacing: "2px"
                        }}
                    >
                        ADYNTIQ
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 2
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "66px",
                            lineHeight: 1.05,
                            maxWidth: "920px",
                            fontWeight: 700
                        }}
                    >
                        <span>AI that delivers.</span>
                        <span>Not just predicts.</span>
                    </div>

                    <div
                        style={{
                            marginTop: "28px",
                            display: "flex",
                            fontSize: "28px",
                            color: "rgba(255,255,255,0.72)"
                        }}
                    >
                        AI strategy · Workflow automation · Custom agents · Data integration
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: "22px",
                        color: "rgba(255,255,255,0.55)",
                        zIndex: 2
                    }}
                >
                    adyntiq.com
                </div>
            </div>
        ),
        size
    );
}