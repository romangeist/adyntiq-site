import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ADYNTIQ AI Consulting";
export const size = {
    width: 1200,
    height: 630
};

export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    background:
                        "linear-gradient(135deg, #07172f 0%, #0b2545 55%, #0f3d46 100%)",
                    color: "white",
                    padding: "72px"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        right: "-80px",
                        top: "-100px",
                        width: "420px",
                        height: "420px",
                        borderRadius: "50%",
                        background: "rgba(37, 99, 235, 0.25)"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        right: "100px",
                        bottom: "-150px",
                        width: "460px",
                        height: "460px",
                        borderRadius: "50%",
                        background: "rgba(34, 197, 94, 0.18)"
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        zIndex: 2
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "22px"
                        }}
                    >
                        <div
                            style={{
                                width: "82px",
                                height: "82px",
                                borderRadius: "20px",
                                background:
                                    "linear-gradient(135deg, #2563EB 0%, #22C55E 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "48px",
                                fontWeight: 800
                            }}
                        >
                            A
                        </div>

                        <div
                            style={{
                                fontSize: "54px",
                                fontWeight: 800,
                                letterSpacing: "2px"
                            }}
                        >
                            ADYNTIQ
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                fontSize: "66px",
                                lineHeight: 1.05,
                                maxWidth: "900px",
                                fontWeight: 700
                            }}
                        >
                            AI that delivers.
                            <br />
                            Not just predicts.
                        </div>

                        <div
                            style={{
                                marginTop: "28px",
                                fontSize: "28px",
                                color: "rgba(255,255,255,0.72)"
                            }}
                        >
                            AI strategy · Workflow automation · Custom agents · Data integration
                        </div>
                    </div>

                    <div
                        style={{
                            fontSize: "22px",
                            color: "rgba(255,255,255,0.55)"
                        }}
                    >
                        adyntiq.com
                    </div>
                </div>
            </div>
        ),
        size
    );
}