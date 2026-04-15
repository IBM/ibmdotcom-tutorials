'use client';
import { useLayoutEffect, useEffect } from 'react';

const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export { useSafeLayoutEffect };
