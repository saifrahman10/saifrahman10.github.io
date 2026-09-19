'use client';

import { useEffect, useState } from 'react';

/**
 * Live clock for a fixed IANA time zone. Renders a placeholder during
 * static export / hydration and fills in on the client.
 */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <time suppressHydrationWarning aria-live="off">
      {time ?? '--:--'}
    </time>
  );
}
