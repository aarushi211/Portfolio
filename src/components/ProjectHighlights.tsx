type ProjectHighlight = {
    value: string;
    label: string;
};

type ProjectHighlightsProps = {
    highlights?: ProjectHighlight[];
};

export default function ProjectHighlights({
    highlights,
}: ProjectHighlightsProps) {
    if (!highlights?.length) return null;

    return (
        <section
            className="project-highlights"
            aria-label="Key project outcomes"
        >
            <div className="project-case-heading">
                <div>
                    <span className="project-case-eyebrow">
                        THE RESULTS
                    </span>
                    <h2>At a glance</h2>
                </div>
            </div>

            <div className="project-highlights-grid">
                {highlights.map((highlight, index) => (
                    <div
                        className="project-highlight"
                        key={`${highlight.label}-${index}`}
                    >
                        <span className="project-highlight-value">
                            {highlight.value}
                        </span>

                        <p className="project-highlight-label">
                            {highlight.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
